import {Component, OnInit} from '@angular/core';
import {ProductDto} from "../shared/product.dto";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {ProductsService} from "../shared/products.service";


@Component({
  selector: 'app-inno-tech-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product?: ProductDto;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }

  update() {
    if (this.product) {
      this.productsService.updateProduct(this.product).subscribe(() => {
          this.location.back();
        },
        error => {
          console.log(error)
        });
    }


  }
}
