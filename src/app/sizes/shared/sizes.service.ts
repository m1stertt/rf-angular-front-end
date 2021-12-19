import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SizeDto} from "./size.dto";
import {ColorDto} from "../../colors/shared/color.dto";
import {ConfigurationService} from "../../configuration.service";

@Injectable({
  providedIn: 'root'
})
export class SizesService {

  constructor(private _http: HttpClient, private configurationService: ConfigurationService) {}

  getAll(): Observable<SizeDto[]> {
    return this._http.get<SizeDto[]>(`${this.configurationService.getServerEndPoint()}Size`);
  }

  getSize(id: number): Observable<SizeDto> {
    return this._http.get<SizeDto>(`${this.configurationService.getServerEndPoint()}Size/${id}`);
  }

  delete(id: number) {
    return this._http.delete<SizeDto>(`${this.configurationService.getServerEndPoint()}Size/${id}`);
  }

  updateSize(size: SizeDto): Observable<SizeDto> {
    console.log(size);
    return this._http.put<SizeDto>(`${this.configurationService.getServerEndPoint()}Size/${size.id}`, size);
  }

  create(size: SizeDto): Observable<SizeDto> {
    return this._http.post<SizeDto>(`${this.configurationService.getServerEndPoint()}Size`, size);
  }
}
