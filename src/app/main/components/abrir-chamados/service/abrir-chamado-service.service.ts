import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { filaAtendimento } from '../../../../shared/models/filaAtendimento';

@Injectable({
  providedIn: 'root',
})
export class AbrirChamadoServiceService {
  private url = environment.urlBackEnd;

  constructor(private http: HttpClient) {}

  public listarTodasFilasAtendimento() {
    return this.http.get<filaAtendimento[]>(this.url + "/fila-atendimento/listar-todas-filas")
  }
}
