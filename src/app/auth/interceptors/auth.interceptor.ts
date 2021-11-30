import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from '../shared/auth.service';
import {catchError} from 'rxjs/operators';
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request;
    const token = this._authService.getToken();
    if (token != null) {
      authReq = this.addTokenHeader(request, token);
    }
    return next.handle(authReq).pipe(
      catchError(error => {
          /*if (error instanceof HttpErrorResponse && !authReq.url.includes('auth/signin') && error.status === 401) {
            return this.handle401Error(authReq, next);
          }*/
          return throwError(error);
        }
      ));
  }

  private addTokenHeader(request: HttpRequest<any>, token: string) {
    /* for Spring Boot back-end */
    // return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });

    /* for Node.js Express back-end */
    return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, token) });
  }
}
