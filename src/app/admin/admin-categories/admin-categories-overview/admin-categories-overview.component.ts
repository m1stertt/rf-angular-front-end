import { Component, OnInit } from '@angular/core';
import { ConfirmationService} from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { CategoriesService } from 'src/app/categories/shared/categories.service';
import { CategoryDto } from 'src/app/categories/shared/category.dto';
import { MessageHandlingService } from 'src/app/errorHandling/shared/message-handling.service';
import { MenuService } from 'src/app/menu/shared/menu.service';
import { AdminCategoryCreateComponent } from '../admin-category-create/admin-category-create.component';

@Component({
  selector: 'app-admin-categories-overview',
  templateUrl: './admin-categories-overview.component.html',
  styleUrls: ['./admin-categories-overview.component.scss']
})
export class AdminCategoriesOverviewComponent implements OnInit {

  constructor(private menuService:MenuService,private categoryService:CategoriesService, private confirmationService:ConfirmationService,private dialogService:DialogService,private messageHandlingService:MessageHandlingService) { }

  cats:CategoryDto[]=[];
  clonedCategories: { [s: string]: CategoryDto; } = {};
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
      {label:'Kategorier',routerLink:"/admin/categories"}
    ];
    this.categoryService.getAll().subscribe(r=>this.cats=r);
  }

  confirmDelete(category:CategoryDto) {
    this.confirmationService.confirm({
      message: 'Er du sikker på du vil fjerne denne kategori? Der er lige nu '+category.products.length+" produkter som har denne kategori i systemet.",
      header: 'Er du sikker?',
      icon: 'pi pi-info-circle',
      accept: () =>{
        this.categoryService.delete(category).subscribe(
          ()=>this.messageHandlingService.success('Kategorien er nu slettet fra systemet.'),
          (error)=>this.messageHandlingService.error(error.statusText));
      }
    });
  }

  create(){
    const ref = this.dialogService.open(AdminCategoryCreateComponent, { header: 'Ny kategori', width: '240px' });
    ref.onClose.subscribe(r=>this.categoryService.getAll().subscribe(r=>this.cats=r));
  }

  onRowEditInit(category: CategoryDto) {
    this.clonedCategories[category.id] = {...category};
  }

  onRowEditSave(category: CategoryDto) {
    this.categoryService.update(category).subscribe(
      ()=>this.messageHandlingService.success('Kategorien er nu opdateret i systemet.'),
      (error)=>this.messageHandlingService.error(error.statusText));
  }

  onRowEditCancel(category: CategoryDto, index: number) {
      this.cats[index] = this.clonedCategories[category.id];
      delete this.clonedCategories[category.id];
  }
}
