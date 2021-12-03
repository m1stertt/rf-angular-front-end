import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SizeDto} from "./size.dto";

@Injectable({
  providedIn: 'root'
})
export class SizesService {

  constructor(private _http: HttpClient) {}

  getAll(): Observable<SizeDto[]> {
    return this._http.get<SizeDto[]>('https://localhost:5001/api/Size');
  }

  getSize(id: number): Observable<SizeDto> {
    return this._http.get<SizeDto>('https://localhost:5001/api/Size/' + id);
  }

  delete(id: number) {
    return this._http.delete<SizeDto>('https://localhost:5001/api/Size/' + id);
  }

  updateSize(size: SizeDto): Observable<SizeDto> {
    console.log(size);
    return this._http.put<SizeDto>('https://localhost:5001/api/Size/' + size.id, size)
  }

  create(size: SizeDto): Observable<SizeDto> {
    return this._http.post<SizeDto>('https://localhost:5001/api/Size', size)
  }
}
