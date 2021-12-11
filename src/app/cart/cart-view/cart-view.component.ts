import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { CartItemDto } from '../shared/cartItem.dto';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  items = this.cartService.getItems();
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.items);
  }

  removeFromCart(product: CartItemDto,amount:number=1){
    this.cartService.removeFromCart(product,amount);
    this.items = this.cartService.getItems();
  }

  incrementCartItem(product: CartItemDto){
    this.cartService.incrementCartItem(product);
    this.items = this.cartService.getItems();
  }

  sum(){
    return this.items.reduce((accum,item) =>{
      if(item.price){
        return accum + item.price*item.amount;
      }
      return accum;
    }, 0);
  }

  amount(){
    return this.cartService.getAmount();
  }

  groupBy(xs: any[], key: string) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

}
