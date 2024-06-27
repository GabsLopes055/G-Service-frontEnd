import { filaAtendimento } from './../../../shared/models/filaAtendimento';
import { Component } from '@angular/core';
import { AbrirChamadoServiceService } from './service/abrir-chamado-service.service';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';

@Component({
  selector: 'app-abrir-chamados',
  templateUrl: './abrir-chamados.component.html',
  styleUrl: './abrir-chamados.component.scss',
})
export class AbrirChamadosComponent {
  filasAtendimento: filaAtendimento[] = [];

  constructor(
    private service: AbrirChamadoServiceService,
    private notificacao: NotificacaoService
  ) {
    this.listarTodasFilasAtendimento();
  }

  listarTodasFilasAtendimento() {
    this.service.listarTodasFilasAtendimento().subscribe((value) => {
      this.filasAtendimento = value;
    });
  }
}
