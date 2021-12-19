import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { CategoriesService } from 'src/app/categories/shared/categories.service';
import { CategoryDto } from 'src/app/categories/shared/category.dto';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  categories=new BehaviorSubject<CategoryDto[]>([]);
  public breadcrumb: MenuItem[] = [{icon:'pi pi-home',routerLink:"/"}];
  constructor(private router:Router,private categoryService:CategoriesService) { 
    this.update();
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        if(val.url&&val.url=="/"){
          this.breadcrumb=[{icon:'pi pi-home',routerLink:"/"}];
        }
        if(val.url&&val.url=="/products"){
          this.breadcrumb=[{icon:'pi pi-home',routerLink:"/"},{label:"Produkter",routerLink:"/products"}];
        }
      }
    });
  }

  update(){
    this.categoryService.getAll().subscribe(r=>{
      this.categories.next(r);
    });
  }
}
