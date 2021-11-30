import { Component, OnInit } from '@angular/core';
import {CategoryDto} from "../shared/category.dto";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {CategoriesService} from "../shared/categories.service";

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.scss']
})
export class CategoriesDetailComponent implements OnInit {

  category?: CategoryDto;

  constructor(private route: ActivatedRoute,
              private categoriesService: CategoriesService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.categoriesService.getCategory(id)
      .subscribe(category => this.category = category);
  }

  goBack(): void {
    this.location.back();
  }

}
