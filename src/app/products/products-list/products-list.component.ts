import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ProductsService} from '../shared/products.service';
import {ProductDto} from '../shared/product.dto';
import {Router} from "@angular/router";
import {AppComponent} from 'src/app/app.component';
import {PageEvent} from "@angular/material/paginator";
import {ProductsGridPaginationService} from "../products-grid/pagination/products-grid-pagination.service";
import {ProductsListPaginationService} from "./pagination/products-list-pagination.service";

@Component({
  selector: 'app-inno-tech-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent implements AfterViewInit {
  products: ProductDto[] = [];

  totalCount: number | undefined;

  clickedProduct: ProductDto | undefined;
  showWriteProducts: Boolean | undefined;

  constructor(private productsService: ProductsService,
              private router: Router, private appComponent: AppComponent,
              public paginationService: ProductsListPaginationService) {
  }

  // ToDo - Setup paging for list to work.

  getPagedProducts() {
    this.productsService.getAll(this.paginationService.getPageIndex, this.paginationService.pageSize)
      .subscribe((result: any) => {
        this.totalCount = JSON.parse(result.headers.get('X-Pagination')).TotalCount;
        this.products = result.body;
      });
  }

  switchPage(event: PageEvent) {
    this.paginationService.change(event);
    this.getPagedProducts();
  }

  delete(product: ProductDto) {
    // this._productService.delete(product.id).subscribe(() => this.updateList());
  }

  // updateList(): void {
  //   this._productService.getAll()
  //     // Not until this is called the request is sent
  //     .subscribe(products => {
  //       this.products = products;
  //     });
  //   this.appComponent.profile$?.subscribe(pro => {
  //     this.showWriteProducts = pro?.permissions.includes("CanManageProducts");
  //   });
  // }

  create() {
    this.router.navigateByUrl('products/create');
  }

  ngAfterViewInit(): void {
    this.getPagedProducts();
  }


}
