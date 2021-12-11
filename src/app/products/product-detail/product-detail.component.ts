import {Component, OnInit} from '@angular/core';
import {ProductDto} from "../shared/product.dto";
import {CategoryDto} from "src/app/categories/shared/category.dto";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {ProductsService} from "../shared/products.service";
import { CategoriesService } from 'src/app/categories/shared/categories.service';
import { FormControl } from '@angular/forms';
import { ColorDto } from 'src/app/colors/shared/color.dto';
import { SizeDto } from 'src/app/sizes/shared/size.dto';
import { CartService } from 'src/app/cart/shared/cart.service';
import { CartItemDto } from 'src/app/cart/shared/cartItem.dto';


@Component({
  selector: 'app-inno-tech-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product?: ProductDto;
  colorSelected: ColorDto|undefined;
  sizeSelected: SizeDto |undefined;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private location: Location,
              private cartService: CartService ) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProduct(id)
      .subscribe(product =>{
        this.product = product;
        console.log(product);
      });
  }

  addToCart(product: ProductDto,_amount:number=1) {
    let test={
      id:product.id,
      amount: _amount,
      name: product.productName,
      price: product.productPrice,
      color: this.colorSelected,
      size: this.sizeSelected
    }
    this.cartService.addToCart(test);
    window.alert('Your product has been added to the cart!');
  }

  goBack(): void {
    this.location.back();
  }
}
