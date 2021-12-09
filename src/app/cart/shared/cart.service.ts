import { Injectable } from '@angular/core';
import { ProductDto } from 'src/app/products/shared/product.dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ProductDto[] = [];
  constructor() { }

  addToCart(product: ProductDto) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
