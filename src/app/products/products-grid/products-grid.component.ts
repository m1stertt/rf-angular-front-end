import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {ProductDto} from "../shared/product.dto";
import {Location} from "@angular/common";
import {MatTableDataSource} from "@angular/material/table";
import {map, switchMap} from "rxjs/operators";


@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements AfterViewInit {
  products: ProductDto[] = [];
  breakpoint: number | undefined;

  lowValue: number = 0;
  highValue: number = 20;

  initialLoad(){
    let currentPage = (this.paginator?.pageIndex ?? 0)+1;
    this.productsService.getAll(currentPage,  (this.paginator?.pageSize ?? 0))
      .subscribe(result => {
        this.totalRecords = result.length;
        this.products = result;
      })
  }

  dataSource = new MatTableDataSource<ProductDto>();
  displayedColumns = ['id', 'name', 'created', 'actions'];

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private location: Location,
              private router: Router){}

  @ViewChild(MatPaginator) paginator?:MatPaginator;
  title = 'ang12-paging';
  totalRecords = 0;

  ngAfterViewInit(): void {
    this.pageChange();
    this.initialLoad();
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;
  }


  pageChange(){
    this.paginator?.page.pipe(
      switchMap(() => {
        let currentPage = (this.paginator?.pageIndex ?? 0)+1;
        return this.productsService.getAll(currentPage, (this.paginator?.pageSize ?? 0));
      }),
      map(result => {
        if(!result){
          return [];
        }
        this.totalRecords = result.length;
        return result;
      })
    )
      .subscribe(data => {
        this.products = data;
      });
  }

  // updateList(): void {
  //   this.productsService.getAll()
  //     // Not until this is called the request is sent
  //     .subscribe(products => {
  //       this.products = products;
  //     });
  // }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }


}
