import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatPaginatorModule, PageEvent} from "@angular/material/paginator";
import {ProductDto} from "../shared/product.dto";
import {Location} from "@angular/common";
import {MatTableDataSource} from "@angular/material/table";
import {PaginationService} from "../../pagination/pagination.service";


@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {

  products: ProductDto[] = [];
  totalCount: number | undefined;
  dataSource = new MatTableDataSource<ProductDto>();
  displayedColumns = ['id', 'name'];


  breakpoint: number | undefined;


  @Output() onPageSwitch = new EventEmitter();

  @Input('products')
  set allowDay(value: ProductDto[]) {
    this.products = value;
  }

  switchPage(event: PageEvent) {
    this.paginationService.change(event);
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.productsService.getAll<ProductDto[]>()
      .subscribe((result: any) => {
        this.totalCount = JSON.parse(result.headers.get('X-Pagination')).totalCount;
        this.products = result.body.value;
      });
  }

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private location: Location,
              private router: Router,
              public paginationService: PaginationService) {
  }

  ngOnInit(): void {

    }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }


}
