import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationService } from 'src/app/configuration.service';
import { ImageDto } from 'src/app/images/shared/image.dto';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private headers = new HttpHeaders();

  constructor(private _http: HttpClient,private configurationService: ConfigurationService) {
    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getByProductID(id:number): Observable<ImageDto[]>{
    return this._http.get<ImageDto[]>(this.configurationService.getServerEndPoint()+"Image/Product/"+id);
  }

  delete(id: number) {
    return this._http.delete<ImageDto>(this.configurationService.getServerEndPoint() +"Image/"+ id);
  }

  update(image:ImageDto): Observable<ImageDto> {
    return this._http.put<ImageDto>(this.configurationService.getServerEndPoint() +"Image/"+ image.id, image)
  }

  create(invStock: ImageDto): Observable<ImageDto> {
    return this._http.post<ImageDto>(this.configurationService.getServerEndPoint()+"Image/", invStock)
  }
}
