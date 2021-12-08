import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatPaginator, MatPaginatorModule, PageEvent} from "@angular/material/paginator";
import {ProductDto} from "../shared/product.dto";
import {Location} from "@angular/common";
import {MatTableDataSource} from "@angular/material/table";
import {ProductsGridPaginationService} from "./pagination/products-grid-pagination.service";
import {map, switchMap} from "rxjs/operators";


@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements AfterViewInit {
  products: ProductDto[] = [];
  searchString: string = '';

  totalCount?: number;
  breakpoint?: number;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              public paginationService: ProductsGridPaginationService,
              private cdRef: ChangeDetectorRef) {
  }

  @Input('products')
  set allowDay(value: ProductDto[]) {
    this.products = value;
  }

  switchPage(event: PageEvent) {
    this.paginationService.change(event);
    this.getPagedProducts();
  }

  getPagedProducts() {
    this.productsService.getAll(this.paginationService.getPageIndex, this.paginationService.pageSize, this.searchString)
      .subscribe((result: any) => {
        this.totalCount = JSON.parse(result.headers.get('X-Pagination')).TotalCount;
        this.products = result.body;
      });
  }


  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }

  ngAfterViewInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
    this.cdRef.detectChanges();

    this.route.queryParams
      .subscribe(params => {
        this.searchString = params.searchString;
        this.getPagedProducts();
      });

  }


}
