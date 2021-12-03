import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryDto} from './category.dto';
import {ProductDto} from "src/app/products/shared/product.dto";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http: HttpClient) {}

  getAll(): Observable<CategoryDto[]> {
    return this._http.get<CategoryDto[]>('https://localhost:5001/api/Category');
  }

  getCategoryProducts(id: number): Observable<ProductDto[]> {
    return this._http.get<ProductDto[]>('https://localhost:5001/api/Category/' + id);
  }
}
