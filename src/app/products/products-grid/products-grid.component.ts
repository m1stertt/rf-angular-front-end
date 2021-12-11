import {AfterViewInit, ChangeDetectorRef, Component, Input} from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ActivatedRoute} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";
import {ProductDto} from "../shared/product.dto";
import {ProductsGridPaginationService} from "./pagination/products-grid-pagination.service";
import { CartService } from 'src/app/cart/shared/cart.service';


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
	
	responsiveOptions =[
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              public paginationService: ProductsGridPaginationService,
              private cdRef: ChangeDetectorRef,
              private cartService:CartService) {
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
        this.searchString = params.searchString || '';
        this.getPagedProducts();
      });

  }


}
