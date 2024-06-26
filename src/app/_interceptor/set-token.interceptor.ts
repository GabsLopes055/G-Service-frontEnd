import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class setTokenInterceptor implements HttpInterceptor {

  // metodo para pegar o token salvo no navegador
  private recuperarToken() {
    return sessionStorage.getItem('token');
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.recuperarToken();

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status == 401 || error.status == 403) {
          alert("VERIFICAR ESSE METODO POSTERIORMENTE")
        }
        return throwError(error);
      })
    );
  }
}
