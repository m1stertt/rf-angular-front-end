import {Component, OnInit} from '@angular/core';
import {ProductDto} from "../shared/product.dto";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {ProductsService} from "../shared/products.service";
import { ColorDto } from 'src/app/colors/shared/color.dto';
import { SizeDto } from 'src/app/sizes/shared/size.dto';
import { CartService } from 'src/app/cart/shared/cart.service';
import { MenuService } from 'src/app/menu/shared/menu.service';
import {ConfigurationService} from "../../configuration.service";
import { AppComponent } from 'src/app/app.component';
import { MessageHandlingService } from 'src/app/messageHandling/shared/message-handling.service';


@Component({
  selector: 'app-inno-tech-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product?: ProductDto;
  colorSelected: ColorDto|undefined=undefined;
  sizeSelected: SizeDto |undefined=undefined;
  serverUrl: string;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private location: Location,
              private cartService: CartService,
              private menuService:MenuService,
              private configurationService: ConfigurationService,
              public appComponent:AppComponent,
              private messageHandlingService:MessageHandlingService) {
    this.serverUrl = configurationService.getServerUrl();
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProduct(id)
      .subscribe(product =>{
        this.product = product;
        this.menuService.breadcrumb=[
          {icon:'pi pi-home',routerLink:"/"},
          {label:'Produkter',routerLink:"/products"},
          {label:product.productName,routerLink:"/products/"+product.id}
        ];
        console.log(product);
      });
  }

  addToCart(product: ProductDto,_amount:number=1) {
    if(this.colorSelected==undefined&&this.product?.colors.length){
      this.messageHandlingService.invalid("Venligst vælg en farve");
      return;
    }else if(this.sizeSelected==undefined&&this.product?.sizes.length){
      this.messageHandlingService.invalid("Venligst vælg en størrelse");
      return;
    }
    let test={
      id:product.id,
      amount: _amount,
      name: product.productName,
      price: product.productPrice,
      color: this.colorSelected,
      size: this.sizeSelected,
      image: product.images[0]

    }
    this.cartService.addToCart(test);
    let msg='Du har tilføjet '+_amount+"stk "+test.name;
    if(this.colorSelected){
      msg+="\nFarve: "+this.colorSelected.title;
    }
    if(this.sizeSelected){
      msg+="\nStørrelse: "+this.sizeSelected.title;
    }
    msg+="\n\nKurv: "+this.cartService.getPriceAmount()+",- DKK";
    this.messageHandlingService.success(msg);
  }

  goBack(): void {
    this.location.back();
  }
}
