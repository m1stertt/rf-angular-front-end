import { Component, OnInit } from '@angular/core';
import {ProductDto} from "../shared/product.dto";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsService} from "../shared/products.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-inno-tech-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  product: ProductDto;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private location: Location,
              private router: Router) {
    this.product = {id: 0, productName:'', productPrice: 0, productDescription: '', productImageUrl: '',categories:[],sizes:[],colors:[],images:[]}
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
