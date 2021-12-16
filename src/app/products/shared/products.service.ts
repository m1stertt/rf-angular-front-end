import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDto} from "./product.dto";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private headers = new HttpHeaders();
  private endpoint = `https://localhost:5001/api/Product/`;

  constructor(private _http: HttpClient) {

    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getAll(pageIndex: number, pageSize: number, search: string): Observable<HttpResponse<ProductDto[]>> {
    const mergedUrl = `${this.endpoint}` +
      `?pageNumber=${pageIndex}&pageSize=${pageSize}&searchString=${search}`;
    return this._http.get<ProductDto[]>(mergedUrl, { observe: 'response' });
  }

  getPagedCategoryProducts(pageIndex: number, pageSize: number, categoryId: number, colorIds: number[]): Observable<HttpResponse<ProductDto[]>> {
    const mergedUrl = `${this.endpoint}` +
      `Category?pageNumber=${pageIndex}&pageSize=${pageSize}&categoryId=${categoryId}&colorIds=${colorIds}`;
    return this._http.get<ProductDto[]>(mergedUrl, { observe: 'response' });
  }

  getAllProducts(): Observable<ProductDto[]> {
    return this._http.get<ProductDto[]>('https://localhost:5001/api/Product/');
  }

  getProduct(id: number): Observable<ProductDto> {
    return this._http.get<ProductDto>('https://localhost:5001/api/Product/' + id);
  }

  delete(id: number) {
    return this._http.delete<ProductDto>('https://localhost:5001/api/Product/' + id);
  }

  updateProduct(product: ProductDto): Observable<ProductDto> {
    return this._http.put<ProductDto>('https://localhost:5001/api/Product/' + product.id, product)
  }

  create(product: ProductDto): Observable<ProductDto> {
    return this._http.post<ProductDto>('https://localhost:5001/api/Product', product)
  }

  getFeatured(): Observable<ProductDto[]>{
    return this._http.get<ProductDto[]>('https://localhost:5001/api/Product/Featured');
  }
}
