import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {ProductDto} from "../shared/product.dto";
import {Location} from "@angular/common";


@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {
  products: ProductDto[] = [];
  breakpoint: number | undefined;

  lowValue: number = 0;
  highValue: number = 20;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private location: Location,
              private router: Router){}

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
    this.updateList()

  }
  updateList(): void {
    this.productsService.getAll()
      // Not until this is called the request is sent
      .subscribe(products => {
        this.products = products;
      });
  }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
  }


}
