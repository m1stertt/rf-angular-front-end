import {AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ProductsService} from '../shared/products.service';
import {ProductDto} from '../shared/product.dto';
import {Router} from "@angular/router";
import {AppComponent} from 'src/app/app.component';
import {PageEvent} from "@angular/material/paginator";
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
              public paginationService: ProductsListPaginationService,
              private cdRef: ChangeDetectorRef) {
  }

  getPagedProducts() {
    this.productsService.getAll(this.paginationService.getPageIndex, this.paginationService.pageSize)
      .subscribe((result: any) => {
        this.totalCount = JSON.parse(result.headers.get('X-Pagination')).TotalCount;
        this.products = result.body;
      });
    this.appComponent.profile$?.subscribe(pro => {
      console.log(pro?.permissions);
      this.showWriteProducts = pro?.permissions.includes("CanManageProducts");
    });
  }

  switchPage(event: PageEvent) {
    this.paginationService.change(event);
    this.getPagedProducts();
  }

  delete(product: ProductDto) {
    this.productsService.delete(product.id).subscribe(() => this.getPagedProducts());
  }


  create() {
    this.router.navigateByUrl('products/create');
  }

  ngAfterViewInit(): void {
    this.getPagedProducts();
    this.cdRef.detectChanges();
  }


}
