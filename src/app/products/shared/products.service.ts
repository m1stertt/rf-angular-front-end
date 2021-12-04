import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDto} from "./product.dto";
import {PaginationService} from "../../pagination/pagination.service";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private headers = new HttpHeaders();
  private endpoint = `http://localhost:5000/api/products/`;

  constructor(private _http: HttpClient,
              private paginationService: PaginationService) {

    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }

  // getAll<T>(pageNumber: number, pageSize: number): Observable<ProductDto[]> {
  //   return this._http.get<ProductDto[]>('https://localhost:5001/api/Product?pageNumber=' + pageNumber + '&pageSize=' + pageSize, {responseType:'json'});
  // }
  getAll<T>() {
    const mergedUrl = `${this.endpoint}` +
      `?page=${this.paginationService.page}&pageCount=${this.paginationService.pageCount}`;
    return this._http.get<T>(mergedUrl, { observe: 'response' });
  }

  getProduct(id: number): Observable<ProductDto> {
    return this._http.get<ProductDto>('https://localhost:5001/api/Product/' + id);
  }

  delete(id: number) {
    return this._http.delete<ProductDto>('https://localhost:5001/api/Product/' + id);
  }

  updateProduct(product: ProductDto): Observable<ProductDto> {
    console.log(product);
    return this._http.put<ProductDto>('https://localhost:5001/api/Product/' + product.id, product)
  }

  create(product: ProductDto): Observable<ProductDto> {
    return this._http.post<ProductDto>('https://localhost:5001/api/Product', product)
  }
}
