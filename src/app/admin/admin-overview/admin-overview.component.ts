import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu/shared/menu.service';
import { ProductDto } from 'src/app/products/shared/product.dto';
import { ProductsService } from 'src/app/products/shared/products.service';

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.scss']
})
export class AdminOverviewComponent implements OnInit {
  constructor(private menuService:MenuService,private productService:ProductsService) { }

  products:ProductDto[]=[];
  cols = [
    { field: 'id', header: 'ID' },
    { field: 'productName', header: 'Name' },
    { field: 'productPrice', header: 'Price' },
    //{ field: 'quantity', header: 'Quantity' }
  ];
  ngOnInit(): void {
    this.menuService.breadcrumb=[
      {icon:'pi pi-home',routerLink:"/"},
      {label:'Admin Panel',routerLink:"/admin"},
    ];
    this.productService.getAllProducts().subscribe(e=>{
      this.products=e;
    })
  }

}
