import { Injectable } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {ProductsGridPaginationSettings} from "./shared/products-grid-pagination-settings";

@Injectable({
  providedIn: 'root'
})
export class ProductsGridPaginationService {
  private paginationModel: ProductsGridPaginationSettings;

  get getPageIndex(): number {
    return this.paginationModel.pageIndex;
  }

  get getDefaultPageSize(): number[] {
    return this.paginationModel.defaultPageSize;
  }

  get pageSize(): number {
    return this.paginationModel.pageSize;
  }

  constructor() {
    this.paginationModel = new ProductsGridPaginationSettings();
  }

  change(pageEvent: PageEvent) {
    this.paginationModel.pageIndex = pageEvent.pageIndex + 1;
    this.paginationModel.pageSize = pageEvent.pageSize;
    this.paginationModel.length = pageEvent.length;
  }
}
