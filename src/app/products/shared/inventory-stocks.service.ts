import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InventoryStockDto } from './inventoryStock.dto';

@Injectable({
  providedIn: 'root'
})
export class InventoryStocksService {

  private headers = new HttpHeaders();
  private endpoint = `https://localhost:5001/api/InventoryStock/`;

  constructor(private _http: HttpClient) {

    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getByProductID(id:number): Observable<InventoryStockDto[]>{
    return this._http.get<InventoryStockDto[]>(this.endpoint+"Product/"+id);
  }

  delete(id: number) {
    return this._http.delete<InventoryStockDto>(this.endpoint + id);
  }

  update(invStock: InventoryStockDto): Observable<InventoryStockDto> {
    return this._http.put<InventoryStockDto>(this.endpoint + invStock.id, invStock)
  }

  create(invStock: InventoryStockDto): Observable<InventoryStockDto> {
    return this._http.post<InventoryStockDto>(this.endpoint, invStock)
  }
}
