import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu/shared/menu.service';
import { ProductDto } from 'src/app/products/shared/product.dto';
import { ProductsService } from 'src/app/products/shared/products.service';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit {
  products:ProductDto[]=[];
  cols = [
    { field: 'id', header: 'ID' },
    { field: 'productName', header: 'Name' },
    { field: 'productPrice', header: 'Price' },
    //{ field: 'quantity', header: 'Quantity' }
  ];
  constructor(private menuService:MenuService,private productService:ProductsService) { }

  ngOnInit(): void {
    this.menuService.breadcrumb=[
      {icon:'pi pi-home',routerLink:"/"},
      {label:'Admin Panel',routerLink:"/admin"},
      {label:'Produkter',routerLink:"/admin"}
    ];
    this.productService.getAllProducts().subscribe(e=>{
      this.products=e;
    })
  }

}
