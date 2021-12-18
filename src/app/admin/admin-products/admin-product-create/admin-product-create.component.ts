import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/products/shared/product.dto';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "src/app/products/shared/products.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.scss']
})
export class AdminProductCreateComponent implements OnInit {
  product: ProductDto;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private location: Location,
              private router: Router) {
    this.product = {id: 0, productName:'', productPrice: 0, productDiscountPrice:0,productDescription: '', productImageUrl: '',productFeatured:false,categories:[],sizes:[],colors:[],images:[],inventoryStocks:[]}
  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  create() {
    this.productsService.create(this.product).subscribe(() => {
        this.router.navigateByUrl('/products')
      },
      error => {
        console.log(error)
      });

  }
}
