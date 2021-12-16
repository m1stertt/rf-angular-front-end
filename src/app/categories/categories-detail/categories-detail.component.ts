import {ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {CategoriesService} from "../shared/categories.service";
import {ProductDto} from 'src/app/products/shared/product.dto';
import {PageEvent} from '@angular/material/paginator';
import {CategoryDto} from '../shared/category.dto';
import {MenuService} from 'src/app/menu/shared/menu.service';
import {ProductsService} from "../../products/shared/products.service";
import {ProductsGridPaginationService} from "../../products/products-grid/pagination/products-grid-pagination.service";

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.scss']
})
export class CategoriesDetailComponent implements OnInit, OnChanges {
  colors: number[] = [];
  isDataAvailable: boolean = false;
  products: ProductDto[] = [];
  category: CategoryDto | undefined;
  totalCount?: number;
  id: number = 0;

  constructor(private route: ActivatedRoute,
              private categoriesService: CategoriesService,
              private location: Location,
              private cdRef: ChangeDetectorRef,
              private menuService: MenuService,
              private productsService: ProductsService,
              public paginationService: ProductsGridPaginationService) {
  }

  switchPage(event: PageEvent) {
    this.paginationService.change(event);
    this.getPagedProducts();
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.id = params.id || '';
        this.getPagedProducts();
      });
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
    this.cdRef.detectChanges();
  }

  getPagedProducts(): void {
    this.categoriesService.getCategory(this.id)
      .subscribe(category => {
        this.category = category;
        this.menuService.breadcrumb = [
          {icon: 'pi pi-home', routerLink: "/"},
          {label: 'Kategorier', routerLink: "/category"},
          {label: this.category.name, routerLink: "/category/" + category.id}
        ];
        this.productsService.getPagedCategoryProducts(this.paginationService.getPageIndex, this.paginationService.pageSize, this.id, this.colors)
          .subscribe((result: any) => {
            this.totalCount = JSON.parse(result.headers.get('X-Pagination')).TotalCount;
            this.products = result.body;

            this.isDataAvailable = true;
          });
      });

  }

  breakpoint: number | undefined;


  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


  onColorsChanged(colors: number[]) {
    this.colors = colors;
    this.getPagedProducts();
  }
}
