import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {CategoriesService} from "../shared/categories.service";
import {ProductDto} from 'src/app/products/shared/product.dto';
import {PageEvent} from '@angular/material/paginator';
import {CategoryDto} from '../shared/category.dto';
import {MenuService} from 'src/app/menu/shared/menu.service';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.scss']
})
export class CategoriesDetailComponent implements OnInit, AfterViewInit {
  isDataAvailable: boolean = false;
  products: ProductDto[] = [];
  category: CategoryDto | undefined;

  constructor(private route: ActivatedRoute,
              private categoriesService: CategoriesService,
              private location: Location,
              private cdRef: ChangeDetectorRef,
              private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(q => {
      this.getProducts(q.id);

    });
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
    this.cdRef.detectChanges();
  }

  getProducts(id: number): void {
    this.categoriesService.getCategory(id)
      .subscribe(category => {
        this.category = category;
        this.products = category.products;
        this.menuService.breadcrumb = [
          {icon: 'pi pi-home', routerLink: "/"},
          {label: 'Kategorier', routerLink: "/category"},
          {label: this.category.name, routerLink: "/category/" + category.id}
        ];
        this.isDataAvailable = true;
      });
  }

  goBack(): void {
    this.location.back();
  }

  breakpoint: number | undefined;

  lowValue: number = 0;
  highValue: number = 20;

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }

  ngAfterViewInit(): void {

  }

}
