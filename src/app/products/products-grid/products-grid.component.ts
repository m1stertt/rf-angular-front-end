import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductsService} from "../shared/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import { MatPaginator} from "@angular/material/paginator";
import {ProductDto} from "../shared/product.dto";
import {Location} from "@angular/common";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss']
})
export class ProductsGridComponent implements OnInit {
  products: ProductDto[] = [];
  dataSource = new MatTableDataSource(this.products);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute,
              private productsService: ProductsService,
              private location: Location,
              private router: Router){}

  ngOnInit(): void {
    this.updateList()
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  updateList(): void {
    this.productsService.getAll()
      // Not until this is called the request is sent
      .subscribe(products => {
        this.products = products;
      });
  }


}
