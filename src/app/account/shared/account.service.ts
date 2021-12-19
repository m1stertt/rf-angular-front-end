import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserDto} from "./user.dto";
import {CategoryDto} from "../../categories/shared/category.dto";
import {ConfigurationService} from "../../configuration.service";


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private headers = new HttpHeaders();

  constructor(private _http: HttpClient, private configurationService: ConfigurationService) {

    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
  }

  getUser(id: number): Observable<UserDto> | null {
    return this._http.get<UserDto>(`${this.configurationService.getServerEndPoint()}User/${id}`);
  }

  delete(id: number) {
    return this._http.delete<UserDto>(`${this.configurationService.getServerEndPoint()}User/${id}`);
  }

  updateUser(user: UserDto): Observable<UserDto> {
    return this._http.put<UserDto>(`${this.configurationService.getServerEndPoint()}User/${user.id}`, user);
  }

  create(user: UserDto): Observable<UserDto> {
    return this._http.post<UserDto>(`${this.configurationService.getServerEndPoint()}User`, user);
  }
}
