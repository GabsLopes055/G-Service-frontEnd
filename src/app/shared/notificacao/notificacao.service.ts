import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificacaoService {

  constructor(private notificacao: ToastrService) {}

  public notificacaoSucesso(titulo: string, mensagem: string) {
    this.notificacao.success(mensagem, titulo, {
      timeOut: 5000,
      progressBar: true,
    });
  }

  public notificacaoError(titulo: string, mensagem: string) {
    this.notificacao.error(mensagem, titulo, {
      timeOut: 5000,
      progressBar: true,
    });
  }

  public notificacaoAviso(titulo: string, mensagem: string) {
    this.notificacao.info(mensagem, titulo, {
      timeOut: 5000,
      progressBar: true,
    });
  }
}
