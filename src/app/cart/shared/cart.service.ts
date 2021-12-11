import { Injectable } from '@angular/core';
import { ProductDto } from 'src/app/products/shared/product.dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ProductDto[] = [];
  constructor() {
    var cart=localStorage.getItem('cart');
    if(cart!=null){
      console.log("Restored shopping cart");
      this.items=JSON.parse(cart);
    }
  }

  addToCart(product: ProductDto) {
    this.items.push(product);
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  removeFromCart(product: ProductDto){
    this.items=this.items.filter(function(item) {
      return item !== product
    });
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem("cart");
    return this.items;
  }
}
