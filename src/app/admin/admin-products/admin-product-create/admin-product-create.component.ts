import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/products/shared/product.dto';
import { Router} from "@angular/router";
import {ProductsService} from "src/app/products/shared/products.service";
import { ErrorHandlingMessageService } from 'src/app/errorHandling/shared/error-handling-message.service';

@Component({
  selector: 'app-admin-product-create',
  templateUrl: './admin-product-create.component.html',
  styleUrls: ['./admin-product-create.component.scss']
})
export class AdminProductCreateComponent implements OnInit {
  product: ProductDto;

  constructor(private productsService: ProductsService,
              private router: Router,
              private errorHandlingMessageService:ErrorHandlingMessageService) {
    this.product = {id: 0, productName:'', productPrice: 0, productDiscountPrice:0,productDescription: '', productImageUrl: '',productFeatured:false,categories:[],sizes:[],colors:[],images:[],inventoryStocks:[]}
  }

  ngOnInit(): void {
  }

  create() {
    this.productsService.create(this.product).subscribe((res) => {
        if(!res) return this.errorHandlingMessageService.error("Der var en fejl med at lave produktet.");
        this.router.navigateByUrl('/admin/products/'+res.id)
      },
      error => this.errorHandlingMessageService.error(error.statusText));
  }
}
