import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/products/shared/product.dto';
import { Router} from "@angular/router";
import {ProductsService} from "src/app/products/shared/products.service";
import { MessageHandlingService } from 'src/app/messageHandling/shared/message-handling.service';
import { MenuService } from 'src/app/menu/shared/menu.service';

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.scss']
})
export class AdminProductCreateComponent implements OnInit {
  product: ProductDto;

  constructor(private productsService: ProductsService,
              private router: Router,
              private messageHandlingService:MessageHandlingService,private menuService:MenuService) {
    this.product = {id: 0, productName:'', productPrice: 0, productDiscountPrice:0,productDescription: '',productFeatured:false,categories:[],sizes:[],colors:[],images:[],inventoryStocks:[]}
  }

  ngOnInit(): void {
    this.menuService.breadcrumb=[
      {icon:'pi pi-home',routerLink:"/"},
      {label:'Admin Panel',routerLink:"/admin"},
      {label:'Produkter',routerLink:"/admin/products"},
      {label:'Lav nyt produkt',routerLink:"/admin/products/create"}
    ];
  }

  create() {
    if(!this.product.productName.length) return this.messageHandlingService.invalid("Produktet skal have et navn.");
    this.productsService.create(this.product).subscribe((res) => {
        if(!res) return this.messageHandlingService.error("Der var en fejl med at lave produktet.");
        this.router.navigateByUrl('/admin/products/'+res.id)
      },
      error => this.messageHandlingService.error(error.statusText));
  }
}
