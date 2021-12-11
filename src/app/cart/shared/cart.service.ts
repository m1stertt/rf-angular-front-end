import { Injectable } from '@angular/core';
import { ProductDto } from 'src/app/products/shared/product.dto';
import { ProductsService } from 'src/app/products/shared/products.service';
import { CartItemDto } from './cartItem.dto';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartItemDto[] = [];
  constructor(private productService:ProductsService) {
    var cart=localStorage.getItem('cart');
    if(cart!=null){
      console.log("Restored shopping cart");
      this.items=JSON.parse(cart);
      this.items.forEach((item, index)=>{
        this.productService.getProduct(item.id).subscribe(product=>{
          this.items[index].name=product.productName;
          this.items[index].price=product.productPrice;
        });
      });
    }
  }

  addToCart(product: ProductDto,amount:number=1) {
    let index=this.items.findIndex(e=>e.id===product.id);
    if (index>=0) {
      this.items[index].amount+=amount;
    }else{
      this.items.push({id:product.id,amount:amount,price:product.productPrice,name:product.productName})
    }
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  removeFromCart(product: CartItemDto,amount:number=1){
    let index=this.items.findIndex(e=>e.id===product.id);
    if (index<0) return; //Unable to find item
    this.items[index].amount-=amount;
    if(this.items[index].amount<=0){
      this.items.splice(index,1);
    }
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }

  getAmount(){
    return this.items.reduce((accum,item) =>accum + item.amount, 0);
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem("cart");
    return this.items;
  }
}
