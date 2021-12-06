import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../shared/products.service';
import {ProductDto} from '../shared/product.dto';
import {Router} from "@angular/router";
import {AppComponent} from 'src/app/app.component';

@Component({
  selector: 'app-inno-tech-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent implements OnInit {
  products: ProductDto[] = [];
  clickedProduct: ProductDto | undefined;
  showWriteProducts: Boolean | undefined;

  constructor(private _productService: ProductsService,
              private router: Router, private appComponent: AppComponent) {
  }

  // ToDo - Setup paging for list to work.


  ngOnInit(): void {
    // this.updateList()
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


}
