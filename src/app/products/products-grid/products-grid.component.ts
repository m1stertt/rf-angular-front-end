import {AfterViewInit, ChangeDetectorRef, Component, Input} from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ActivatedRoute} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";
import {ProductDto} from "../shared/product.dto";
import {ProductsGridPaginationService} from "./pagination/products-grid-pagination.service";
import { MenuService } from 'src/app/menu/shared/menu.service';
import {ConfigurationService} from "../../configuration.service";


@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements AfterViewInit {
  products: ProductDto[] = [];
  search: string = '';

  totalCount?: number;
  breakpoint?: number;
  serverUrl: string;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              public paginationService: ProductsGridPaginationService,
              private cdRef: ChangeDetectorRef,
              private menuService:MenuService,
              private configurationService: ConfigurationService) {
    this.serverUrl = configurationService.getServerUrl();
  }

  // @Input('products')
  // set allowDay(value: ProductDto[]) {
  //   this.products = value;
  // }

  switchPage(event: PageEvent) {
    this.paginationService.change(event);
    this.getPagedProducts();
  }

  getPagedProducts() {
    this.productsService.getAll(this.paginationService.getPageIndex, this.paginationService.pageSize, this.search)
      .subscribe((result: any) => {
        this.totalCount = JSON.parse(result.headers.get('X-Pagination')).TotalCount;
        this.products = result.body;
        if(this.search!=""){
          this.menuService.breadcrumb=[
            {icon:'pi pi-home',routerLink:"/"},
            {label:"Søgning for '"+this.search+"'",routerLink:"/products",queryParams:{"search":this.search}}
          ]
        }
      });
  }


  onResize(event: any) {
    this.calculateBreakpoint();
  }

  calculateBreakpoint(){
    if(window.innerWidth <= 768){
      this.breakpoint=2;
    }else if(window.innerWidth <=992){
      this.breakpoint=4;
    }else{
      this.breakpoint=6;
    }
  }

  ngAfterViewInit(): void {
    this.calculateBreakpoint();
    this.cdRef.detectChanges();

    this.route.queryParams
      .subscribe(params => {
        this.search = params.search || '';
        this.getPagedProducts();
      });

  }


}
