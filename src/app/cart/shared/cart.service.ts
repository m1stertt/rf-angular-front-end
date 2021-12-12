import { Injectable } from '@angular/core';
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
          this.items[index].image=product.images[0];
          let color=this.items[index].color;
          let size=this.items[index].size;
          if(color){
            if(!product.colors||!product.colors.includes(color)){
              //Remove item, not available anymore
            }
            //@todo
          }
          if(size){
            if(!product.sizes||!product.sizes.includes(size)){
              //Remove item, not available anymore
            }
            //@todo
          }
        });
      });
    }
  }

  addToCart(product: CartItemDto) { //@todo size stuff.
    let index=this.items.findIndex(e=>e.id===product.id&&e.color===product.color&&e.size===product.size);
    if (index>=0) {
      this.items[index].amount+=product.amount;
    }else{
      this.items.push(product)
    }
    this.update();
  }

  incrementCartItem(product: CartItemDto) { //@todo size stuff.
    let index=this.items.findIndex(e=>e.id===product.id&&e.color===product.color&&e.size===product.size);
    if (index>=0) {
      this.items[index].amount+=product.amount;
    }else{
      this.items.push(product)
    }
    this.update();
  }

  removeFromCart(product: CartItemDto,amount:number=1){
    let index=this.items.findIndex(e=>e.id===product.id&&e.color===product.color&&e.size===product.size);
    if (index<0) return; //Unable to find item
    this.items[index].amount-=amount;
    if(this.items[index].amount<=0){
      this.items.splice(index,1);
    }
    this.update();
  }

  update(){
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }

  getAmount(){
    return this.items.reduce((accum,item) =>accum + item.amount, 0);
  }

  getPriceAmount(){
    return this.items.reduce((accum,item) =>{
      if(item.price){
        return accum + item.price*item.amount;
      }
      return accum;
    }, 0);
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem("cart");
    return this.items;
  }
}
