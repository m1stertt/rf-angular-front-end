export class ProductsGridPaginationSettings {
  defaultPageSize: number[] = [1, 5, 10, 25, 100];
  pageSize = this.defaultPageSize[1];
  pageIndex = 1;
  length = 0;
}
