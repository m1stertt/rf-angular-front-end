import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductDto} from "./product.dto";
import {ProductsGridPaginationService} from "../products-grid/pagination/products-grid-pagination.service";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private headers = new HttpHeaders();
  private endpoint = `http://localhost:5000/api/Product/`;

  constructor(private _http: HttpClient,
              private paginationService: ProductsGridPaginationService) {

    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getAll(pageIndex: number, pageSize: number, searchString: string): Observable<HttpResponse<ProductDto[]>> {
    const mergedUrl = `${this.endpoint}` +
      `?pageNumber=${pageIndex}&pageSize=${pageSize}&searchString=${searchString}`;
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
    console.log(product);
    return this._http.put<ProductDto>('https://localhost:5001/api/Product/' + product.id, product)
  }

  create(product: ProductDto): Observable<ProductDto> {
    return this._http.post<ProductDto>('https://localhost:5001/api/Product', product)
  }

  getFeatured(): Observable<ProductDto[]>{
    return this._http.get<ProductDto[]>('https://localhost:5001/api/Product/Featured');
  }
}
