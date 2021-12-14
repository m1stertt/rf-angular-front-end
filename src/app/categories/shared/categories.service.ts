import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryDto} from './category.dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http: HttpClient) {}

  getAll(): Observable<CategoryDto[]> {
    return this._http.get<CategoryDto[]>('https://localhost:5001/api/Category');
  }

  getCategory(id: number): Observable<CategoryDto> {
    return this._http.get<CategoryDto>('https://localhost:5001/api/Category/' + id);
  }

  update(category: CategoryDto): Observable<CategoryDto> {
    return this._http.put<CategoryDto>('https://localhost:5001/api/Category/' + category.id, category)
  }

  delete(category: CategoryDto): Observable<CategoryDto> {
    return this._http.delete<CategoryDto>('https://localhost:5001/api/Category/' + category.id);
  }

  create(category: CategoryDto): Observable<CategoryDto> {
    return this._http.post<CategoryDto>('https://localhost:5001/api/Category', category)
  }
}
