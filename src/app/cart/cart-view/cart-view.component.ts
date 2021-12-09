import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {
  items = this.cartService.getItems();
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

}
