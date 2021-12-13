import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/categories/shared/categories.service';
import { CategoryDto } from 'src/app/categories/shared/category.dto';
import { MenuService } from 'src/app/menu/shared/menu.service';

@Component({
  selector: 'app-admin-categories-overview',
  templateUrl: './admin-categories-overview.component.html',
  styleUrls: ['./admin-categories-overview.component.scss']
})
export class AdminCategoriesOverviewComponent implements OnInit {

  constructor(private menuService:MenuService,private categoryService:CategoriesService) { }

  cats:CategoryDto[]=[];
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

}
