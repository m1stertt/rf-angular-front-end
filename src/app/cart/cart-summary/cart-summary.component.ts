import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cartService:CartService,private router:Router) { }

  ngOnInit(): void {
  }

  nextPage():void{
    if(this.cartService.getAmount()<=0) return;
    this.router.navigateByUrl("/cart/checkout");
  }

}
