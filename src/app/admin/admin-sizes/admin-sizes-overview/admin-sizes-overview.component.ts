import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageHandlingService } from 'src/app/errorHandling/shared/message-handling.service';
import { MenuService } from 'src/app/menu/shared/menu.service';
import { SizeDto } from 'src/app/sizes/shared/size.dto';
import { SizesService } from 'src/app/sizes/shared/sizes.service';
import { AdminSizeCreateComponent } from '../admin-size-create/admin-size-create.component';

@Component({
  selector: 'app-admin-sizes-overview',
  templateUrl: './admin-sizes-overview.component.html',
  styleUrls: ['./admin-sizes-overview.component.scss']
})
export class AdminSizesOverviewComponent implements OnInit {
  constructor(private menuService:MenuService,private sizesService:SizesService, private confirmationService:ConfirmationService,private dialogService:DialogService,private messageHandlingService:MessageHandlingService) { }

  sizes:SizeDto[]=[];
  clonedSizes: { [s: string]: SizeDto; } = {};
  cols = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'products', header:'Produkter'}
  ];
  ngOnInit(): void {
    this.menuService.breadcrumb=[
      {icon:'pi pi-home',routerLink:"/"},
      {label:'Admin Panel',routerLink:"/admin"},
      {label:'Størrelser',routerLink:"/admin/sizes"}
    ];
    this.sizesService.getAll().subscribe(e=>this.sizes=e);
  }

  confirmDelete(size:SizeDto) {
    this.confirmationService.confirm({
      message: 'Er du sikker på du vil fjerne denne størrelse? Der er lige nu '+size.products.length+" produkter som har denne størrelse i systemet.",
      header: 'Er du sikker?',
      icon: 'pi pi-info-circle',
      accept: () =>{
        this.sizesService.delete(size.id).subscribe(
          ()=>{
            this.messageHandlingService.success('Størrelsen er nu slettet fra systemet.');
            this.sizesService.getAll().subscribe(e=>this.sizes=e);
          },
          (error)=>this.messageHandlingService.error(error.statusText));
      }
    });
  }

  create(){
    const ref = this.dialogService.open(AdminSizeCreateComponent, {
      header: 'Ny størrelse',
      width: '240px'
    });
    ref.onClose.subscribe(r=>this.sizesService.getAll().subscribe(e=>this.sizes=e));
  }

  onRowEditInit(size: SizeDto) {
    this.clonedSizes[size.id] = {...size};
  }

  onRowEditSave(size: SizeDto) {
    if(size.title=="") return this.messageHandlingService.error("Størrelsen skal have et navn");
    this.sizesService.updateSize(size).subscribe(s=>{
      this.messageHandlingService.success("Størrelsen er nu opdateret i systemet.");
      this.sizesService.getAll().subscribe(e=>this.sizes=e);
    },(error)=>this.messageHandlingService.error(error.statusText));
  }

  onRowEditCancel(size: SizeDto, index: number) {
      this.sizes[index] = this.clonedSizes[size.id];
      delete this.clonedSizes[size.id];
  }
}
