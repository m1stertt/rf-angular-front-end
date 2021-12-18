import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/menu/shared/menu.service';
import { CartService } from '../shared/cart.service';
import { CartItemDto } from '../shared/cartItem.dto';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  steps=[
    {label: 'Kurv'},
    {label: 'Levering'},
    {label: 'Bekræftelse'}
  ];
  items = this.cartService.getItems();
  constructor(private cartService: CartService,private menuService:MenuService,private router:Router) { }

  ngOnInit(): void {
    console.log(this.items);
    this.menuService.breadcrumb=[
      {icon:'pi pi-home',routerLink:"/"},
      {label:'Kurv',routerLink:"/cart"}
    ];
  }

  removeFromCart(product: CartItemDto,amount:number=1){
    this.cartService.removeFromCart(product,amount);
    this.items = this.cartService.getItems();
  }

  incrementCartItem(product: CartItemDto){
    this.cartService.incrementCartItem(product);
    this.items = this.cartService.getItems();
  }

  groupBy(xs: any[], key: string) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

}
