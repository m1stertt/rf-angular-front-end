import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-admin-sidepanel',
  templateUrl: './admin-sidepanel.component.html',
  styleUrls: ['./admin-sidepanel.component.scss']
})
export class AdminSidepanelComponent implements OnInit {
  items:MenuItem[] = [{
    label: 'Tilbage',
    //icon: 'pi pi-pw pi-tags',
    routerLink:"/admin/"
  }];
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.hasPermission("CanManageProducts").subscribe((res)=>{
      if(!res) return;
      this.items.push({
        label: 'Produkter',
        icon: 'pi pi-pw pi-file',
        items: [
          { label: 'Nyt produkt', icon: 'pi pi-fw pi-plus',routerLink:"/admin/products/create" },
          {label: 'Se/Rediger produkter', icon: 'pi pi-fw pi-pencil',routerLink:"/admin/products/"}
        ]
      });
    });
    this.authService.hasPermission("CanManageCategories").subscribe((res)=>{
      if(!res) return;
      this.items.push({
        label: 'Kategorier',
        icon: 'pi pi-pw pi-tags',
        routerLink:"/admin/categories/"
      });
    });
    this.authService.hasPermission("CanManageSizes").subscribe((res)=>{
      if(!res) return;
      this.items.push({
        label: 'Størrelser',
        icon: 'pi pi-pw pi-sort-amount-up',
        routerLink:"/admin/sizes/",
      });
    });
    this.authService.hasPermission("CanManageColors").subscribe((res)=>{
      if(!res) return;
      this.items.push({
        label: 'Farver',
        icon: 'pi pi-pw pi-sliders-v',
        routerLink:"/admin/colors/"
      });
    });
  }

}
