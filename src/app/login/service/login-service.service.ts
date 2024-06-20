import { usuarioRequest } from '../../shared/models/usuarioRequest';
import { loginRequest } from '../../shared/models/loginRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { loginResponse } from '../../shared/models/loginResponse';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = environment.urlBackEnd;

  constructor(private http: HttpClient) {}

  public realizarLogin(usuario: string, password: string) {
    return this.http.post<loginResponse>(this.url + "/auth/login", { usuario, password }).pipe(
      tap((value) => {
        sessionStorage.setItem('usuario-logado', value.usuario),
          sessionStorage.setItem('token', value.token);
      })
    );
  }

  public realizarCadastro(usuarioRequest: usuarioRequest) {
    return this.http.post<usuarioRequest>(this.url + "/usuario/registrar", usuarioRequest);
  }
}
