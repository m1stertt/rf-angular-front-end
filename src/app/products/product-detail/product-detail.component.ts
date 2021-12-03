import {Component, OnInit} from '@angular/core';
import {ProductDto} from "../shared/product.dto";
import {CategoryDto} from "src/app/categories/shared/category.dto";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {ProductsService} from "../shared/products.service";
import { CategoriesService } from 'src/app/categories/shared/categories.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-inno-tech-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product?: ProductDto;
  categories: CategoryDto[]=[];
  categories_=new FormControl();

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private location: Location,
              private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.getProduct();
    this.getCategories();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService.getProduct(id)
      .subscribe(product =>{
        this.product = product;
        this.categories_=new FormControl(this.product.categories);
        console.log(product);
      });
  }
  getCategories(): void {
    this.categoriesService.getAll()
      .subscribe(product => this.categories = product);
  }

  goBack(): void {
    this.location.back();
  }

  update() {
    if (this.product) {
      this.productsService.updateProduct(this.product).subscribe(() => {
          //this.location.back();
        },
        error => {
          console.log(error)
        });
    }
  }

  compareWithFunc(a: CategoryDto, b:CategoryDto) {
    return a.id === b.id;
  }
}
