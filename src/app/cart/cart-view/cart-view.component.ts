import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/products/shared/product.dto';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  items = this.cartService.getItems();
  grouped = this.groupBy(this.items,"id");
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  removeFromCart(product: ProductDto){
    this.cartService.removeFromCart(product);
    this.items = this.cartService.getItems();
  }

  sum(){
    return this.items.reduce((accum,item) => accum + item.productPrice, 0);
  }

  groupBy(xs: any[], key: string) {
    return xs.reduce(function(rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

}
