import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ColorDto} from "./color.dto";
import {CategoryDto} from "../../categories/shared/category.dto";
import {ConfigurationService} from "../../configuration.service";

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private _http: HttpClient, private configurationService: ConfigurationService) {}

  getAll(): Observable<ColorDto[]> {
    return this._http.get<ColorDto[]>(`${this.configurationService.getServerEndPoint()}Color`);
  }

  getByProductId(id:Number): Observable<ColorDto[]> {
    return this._http.get<ColorDto[]>('https://localhost:5001/api/Color/Product/'+id);
  }

  getColor(id: number): Observable<ColorDto> {
    return this._http.get<ColorDto>(`${this.configurationService.getServerEndPoint()}Color/${id}`);
  }

  delete(id: number) {
    return this._http.delete<ColorDto>(`${this.configurationService.getServerEndPoint()}Color/${id}`);
  }

  updateColor(color: ColorDto): Observable<ColorDto> {
    return this._http.put<ColorDto>(`${this.configurationService.getServerEndPoint()}Color/${color.id}`, color);
  }

  create(color: ColorDto): Observable<ColorDto> {
    return this._http.post<ColorDto>(`${this.configurationService.getServerEndPoint()}Color`, color);
  }
}
