import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public breadcrumb: MenuItem[] = [{icon:'pi pi-home',routerLink:"/"}];
  constructor(private router:Router) { 
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        if(val.url&&val.url=="/"){
          this.breadcrumb=[{icon:'pi pi-home',routerLink:"/"}];
        }
      }
    });

  }
}
