import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu/shared/menu.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
    this.menuService.breadcrumb=[
      {icon:'pi pi-home',routerLink:"/"},
      {label:'Admin Panel',routerLink:"/admin"},
      {label:'Admin Paneltdo',routerLink:"/admin"}
    ];
  }

}
