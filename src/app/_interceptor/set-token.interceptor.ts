import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { NotificacaoService } from '../shared/notificacao/notificacao.service';

@Injectable()
export class setTokenInterceptor implements HttpInterceptor {

  constructor(private router: Router, private notificacao: NotificacaoService) {

  }

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
          this.notificacao.notificacaoAviso("Atenção !", "Refaça o seu login !")
          this.router.navigate([''])
        }
        return throwError(error);
      })
    );
  }
}
