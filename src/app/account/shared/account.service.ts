import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDto} from "./user.dto";


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private headers = new HttpHeaders();
  private endpoint = 'https://localhost:5001/api/user';

  constructor(private _http: HttpClient) {

    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getUser(id: number): Observable<UserDto> | null {
    return this._http.get<UserDto>(this.endpoint + '/' + id);
  }

  delete(id: number) {
    return this._http.delete<UserDto>(this.endpoint + '/' + id);
  }

  updateUser(user: UserDto): Observable<UserDto> {
    return this._http.put<UserDto>(this.endpoint + '/' + user.id, user)
  }

  create(user: UserDto): Observable<UserDto> {
    return this._http.post<UserDto>(this.endpoint, user)
  }
}
