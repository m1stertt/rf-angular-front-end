import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryDto} from './category.dto';
import {ProductDto} from "../../products/shared/product.dto";
import {ConfigurationService} from "../../configuration.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http: HttpClient, private configurationService: ConfigurationService) {}

  getAll(): Observable<CategoryDto[]> {
    return this._http.get<CategoryDto[]>(`${this.configurationService.getServerEndPoint()}Category`);
  }

  getCategory(id: number): Observable<CategoryDto> {
    return this._http.get<CategoryDto>(`${this.configurationService.getServerEndPoint()}Category/${id}`);
  }

  update(category: CategoryDto): Observable<CategoryDto> {
    return this._http.put<CategoryDto>(`${this.configurationService.getServerEndPoint()}Category/${category.id}`, category);
  }

  delete(category: CategoryDto): Observable<CategoryDto> {
    return this._http.delete<CategoryDto>(`${this.configurationService.getServerEndPoint()}Category/${category.id}`);
  }

  create(category: CategoryDto): Observable<CategoryDto> {
    return this._http.post<CategoryDto>(`${this.configurationService.getServerEndPoint()}Category`, category);
  }
}
