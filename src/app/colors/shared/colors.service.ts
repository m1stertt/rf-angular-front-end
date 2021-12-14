import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ColorDto} from "./color.dto";

@Injectable({
  providedIn: 'root'
})
export class ColorsService {

  constructor(private _http: HttpClient) {}

  getAll(): Observable<ColorDto[]> {
    return this._http.get<ColorDto[]>('https://localhost:5001/api/Color');
  }

  getColor(id: number): Observable<ColorDto> {
    return this._http.get<ColorDto>('https://localhost:5001/api/Color/' + id);
  }

  delete(id: number) {
    return this._http.delete<ColorDto>('https://localhost:5001/api/Color/' + id);
  }

  updateColor(color: ColorDto): Observable<ColorDto> {
    return this._http.put<ColorDto>('https://localhost:5001/api/Color/' + color.id, color)
  }

  create(color: ColorDto): Observable<ColorDto> {
    return this._http.post<ColorDto>('https://localhost:5001/api/Color', color)
  }
}