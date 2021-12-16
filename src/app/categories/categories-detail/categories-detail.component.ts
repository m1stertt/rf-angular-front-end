import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
export class CategoriesDetailComponent implements OnInit {
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

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.id = params.id || '';
        this.getProducts();
      });
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
    this.cdRef.detectChanges();
  }


  // getProducts(): void {
  //   this.categoriesService.getCategory(this.id)
  //     .subscribe(category =>{
  //       this.category = category;
  //       this.products=category.products;
  //       this.menuService.breadcrumb=[
  //         {icon:'pi pi-home',routerLink:"/"},
  //         {label:'Kategorier',routerLink:"/category"},
  //         {label:this.category.name,routerLink:"/category/"+category.id}
  //       ];
  //     });
  // }

  getProducts(): void {
    // this.productsService.getPagedCategoryProducts()
    //   .subscribe(category => {
    //     // this.category = category;
    //     this.products = category.products;
    //     this.menuService.breadcrumb = [
    //       {icon: 'pi pi-home', routerLink: "/"},
    //       {label: 'Kategorier', routerLink: "/category"},
    //       {label: this.category.name, routerLink: "/category/" + category.id}
    //     ];
    //     this.isDataAvailable = true;
    //   });
    this.productsService.getPagedCategoryProducts(this.paginationService.getPageIndex, this.paginationService.pageSize, this.id)
      .subscribe((result: any) => {
        this.totalCount = JSON.parse(result.headers.get('X-Pagination')).TotalCount;
        this.products = result.body;

          this.menuService.breadcrumb=[
            {icon:'pi pi-home',routerLink:"/"},
            // {label:"Søgning for '"+this.search+"'",routerLink:"/products",queryParams:{"search":this.search}}
          ]
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


}
