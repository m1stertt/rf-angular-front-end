import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { CategoryDto } from 'src/app/categories/shared/category.dto';
import { ErrorHandlingMessageService } from 'src/app/errorHandling/shared/error-handling-message.service';
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
  constructor(private menuService:MenuService,private sizesService:SizesService, private confirmationService:ConfirmationService,private messageService:MessageService,private dialogService:DialogService,private errorHandlingMessageService:ErrorHandlingMessageService) { }

  sizes:SizeDto[]=[];
  clonedSizes: { [s: string]: SizeDto; } = {};
  cols = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'products', header:'Produkter'}
    //{ field: 'productPrice', header: 'Price' },
    //{ field: 'quantity', header: 'Quantity' }
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
          ()=>this.errorHandlingMessageService.success('Størrelsen er nu slettet fra systemet.'),
          (error)=>this.errorHandlingMessageService.error(error.statusText));
      }
    });
  }

  create(){
    const ref = this.dialogService.open(AdminSizeCreateComponent, {
      header: 'Ny størrelse',
      width: '240px'
    });
  }

  onRowEditInit(size: SizeDto) {
    this.clonedSizes[size.id] = {...size};
  }

  onRowEditSave(size: SizeDto) {
    this.sizesService.updateSize(size).subscribe(s=>{
      this.messageService.add({severity:'info', summary:'Kategori', detail:'Kategorien er nu opdateret i systemet.'});
    },(error)=>this.errorHandlingMessageService.error(error.statusText));
  }

  onRowEditCancel(size: SizeDto, index: number) {
      this.sizes[index] = this.clonedSizes[size.id];
      delete this.clonedSizes[size.id];
  }
}
