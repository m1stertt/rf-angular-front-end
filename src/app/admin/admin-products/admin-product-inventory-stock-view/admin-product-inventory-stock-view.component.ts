import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/products/shared/product.dto';

@Component({
  selector: 'app-admin-product-inventory-stock-view',
  templateUrl: './admin-product-inventory-stock-view.component.html',
  styleUrls: ['./admin-product-inventory-stock-view.component.scss']
})
export class AdminProductInventoryStockViewComponent implements OnInit {

  product:ProductDto|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
