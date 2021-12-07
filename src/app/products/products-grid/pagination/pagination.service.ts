import { Injectable } from '@angular/core';
import {PageEvent} from "@angular/material/paginator";
import {PaginationModel} from "./shared/pagination.model";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private paginationModel: PaginationModel;

  get getPageIndex(): number {
    return this.paginationModel.pageIndex;
  }

  get getDefaultPageSize(): number[] {
    return this.paginationModel.defaultPageSize;
  }

  get pageCount(): number {
    return this.paginationModel.pageSize;
  }

  constructor() {
    this.paginationModel = new PaginationModel();
  }

  change(pageEvent: PageEvent) {
    this.paginationModel.pageIndex = pageEvent.pageIndex + 1;
    this.paginationModel.pageSize = pageEvent.pageSize;
    this.paginationModel.length = pageEvent.length;
  }
}
