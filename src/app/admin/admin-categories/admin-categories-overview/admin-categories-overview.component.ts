import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { CategoriesService } from 'src/app/categories/shared/categories.service';
import { CategoryDto } from 'src/app/categories/shared/category.dto';
import { MenuService } from 'src/app/menu/shared/menu.service';
import { AdminCategoryCreateComponent } from '../admin-category-create/admin-category-create.component';

@Component({
  selector: 'app-admin-categories-overview',
  templateUrl: './admin-categories-overview.component.html',
  styleUrls: ['./admin-categories-overview.component.scss']
})
export class AdminCategoriesOverviewComponent implements OnInit {

  constructor(private menuService:MenuService,private categoryService:CategoriesService, private confirmationService:ConfirmationService,private messageService:MessageService,private dialogService:DialogService) { }

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
    this.categoryService.getAll().subscribe(e=>{
      console.log(e);
      this.cats=e;
    })
  }

  confirmDelete(category:CategoryDto) {
    this.confirmationService.confirm({
      message: 'Er du sikker på du vil fjerne denne kategori? Der er lige nu '+category.products.length+" produkter som har denne kategori i systemet.",
      header: 'Er du sikker?',
      icon: 'pi pi-info-circle',
      accept: () =>{
        this.categoryService.delete(category).subscribe(category=>{
          this.messageService.add({severity:'info', summary:'Kategori slettet', detail:'Kategorien er nu slettet fra systemet.'});
        },(error)=>{
          this.messageService.add({severity:'error', summary:'Fejl', detail:'Der er desværre opstået en fejl.\nStatus text: '+error.statusText});
        });
      }
    });
  }

  create(){
    const ref = this.dialogService.open(AdminCategoryCreateComponent, {
      header: 'Ny kategori',
      width: '240px'
    });
  }

  onRowEditInit(category: CategoryDto) {
    this.clonedCategories[category.id] = {...category};
  }

  onRowEditSave(category: CategoryDto) {
    this.categoryService.update(category).subscribe(category=>{
      this.messageService.add({severity:'info', summary:'Kategori', detail:'Kategorien er nu opdateret i systemet.'});
    },(error)=>{
      this.messageService.add({severity:'error', summary:'Fejl', detail:'Der er desværre opstået en fejl.\nStatus text: '+error.statusText});
    });
  }

  onRowEditCancel(category: CategoryDto, index: number) {
      this.cats[index] = this.clonedCategories[category.id];
      delete this.clonedCategories[category.id];
  }
}
