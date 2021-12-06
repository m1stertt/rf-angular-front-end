import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDto} from "./product.dto";
import {PaginationService} from "../pagination/pagination.service";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private headers = new HttpHeaders();
  private endpoint = `http://localhost:5000/api/Product/`;

  constructor(private _http: HttpClient,
              private paginationService: PaginationService) {

    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getAll(): Observable<HttpResponse<ProductDto[]>> {
    const mergedUrl = `${this.endpoint}` +
      `?pageNumber=${this.paginationService.page}&pageSize=${this.paginationService.pageCount}`;
    return this._http.get<ProductDto[]>(mergedUrl, { observe: 'response' });
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
