import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/auth/shared/auth.service';
import { LoginUser } from 'src/app/auth/shared/models/login-user';

@Component({
  selector: 'app-admin-sidepanel',
  templateUrl: './admin-sidepanel.component.html',
  styleUrls: ['./admin-sidepanel.component.scss']
})
export class AdminSidepanelComponent implements OnInit {
  items:MenuItem[] = [];
  constructor(private authService:AuthService,private appComponent:AppComponent) { }

  ngOnInit(): void {
    this.appComponent.profile$?.subscribe(r=>{
      if(r==null) return;
      this.items=[];
      this.items.push({
        label: 'Tilbage',
        //icon: 'pi pi-pw pi-tags',
        routerLink:"/admin/"
      });
      let isAdmin=r.permissions.includes("Admin");
      if(isAdmin||r.permissions.includes("CanManageProducts")){
        this.items.push({
          label: 'Produkter',
          icon: 'pi pi-pw pi-file',
          items: [
            { label: 'Nyt produkt', icon: 'pi pi-fw pi-plus',routerLink:"/admin/products/create" },
            {label: 'Se/Rediger produkter', icon: 'pi pi-fw pi-pencil',routerLink:"/admin/products/"}
          ]
        });
      }
      if(isAdmin||r.permissions.includes("CanManageCategories")){
        this.items.push({
          label: 'Kategorier',
          icon: 'pi pi-pw pi-tags',
          routerLink:"/admin/categories/"
        });
      }
      if(isAdmin||r.permissions.includes("CanManageSizes")){
        this.items.push({
          label: 'Størrelser',
          icon: 'pi pi-pw pi-sort-amount-up',
          routerLink:"/admin/sizes/",
        });
      }
      if(isAdmin||r.permissions.includes("CanManageColors")){
        this.items.push({
          label: 'Farver',
          icon: 'pi pi-pw pi-sliders-v',
          routerLink:"/admin/colors/"
        });
      }
    });
  }

}
