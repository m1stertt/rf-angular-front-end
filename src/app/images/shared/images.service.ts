import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageDto } from 'src/app/images/shared/image.dto';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  private headers = new HttpHeaders();
  private endpoint = `https://localhost:5001/api/Image/`;

  constructor(private _http: HttpClient) {

    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getByProductID(id:number): Observable<ImageDto[]>{
    return this._http.get<ImageDto[]>(this.endpoint+"Product/"+id);
  }

  delete(id: number) {
    return this._http.delete<ImageDto>(this.endpoint + id);
  }

  update(image:ImageDto): Observable<ImageDto> {
    return this._http.put<ImageDto>(this.endpoint + image.id, image)
  }

  create(invStock: ImageDto): Observable<ImageDto> {
    return this._http.post<ImageDto>(this.endpoint, invStock)
  }
}
