import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationService } from 'src/app/configuration.service';
import { InventoryStockDto } from './inventoryStock.dto';

@Injectable({
  providedIn: 'root'
})
export class InventoryStocksService {

  private headers = new HttpHeaders();

  constructor(private _http: HttpClient,private configurationService: ConfigurationService) {

    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getByProductID(id:number): Observable<InventoryStockDto[]>{
    return this._http.get<InventoryStockDto[]>(this.configurationService.getServerEndPoint()+"InventoryStock/Product/"+id);
  }

  delete(id: number) {
    return this._http.delete<InventoryStockDto>(this.configurationService.getServerEndPoint() +"InventoryStock/"+ id);
  }

  update(invStock: InventoryStockDto): Observable<InventoryStockDto> {
    return this._http.put<InventoryStockDto>(this.configurationService.getServerEndPoint() +"InventoryStock/"+ invStock.id, invStock)
  }

  create(invStock: InventoryStockDto): Observable<InventoryStockDto> {
    return this._http.post<InventoryStockDto>(this.configurationService.getServerEndPoint()+"InventoryStock/", invStock)
  }
}
