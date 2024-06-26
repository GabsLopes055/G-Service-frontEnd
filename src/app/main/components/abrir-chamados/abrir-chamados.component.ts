import { Component } from '@angular/core';
import { filaAtendimento } from '../../../shared/models/filaAtendimento';
import { AbrirChamadoServiceService } from './service/abrir-chamado-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-abrir-chamados',
  templateUrl: './abrir-chamados.component.html',
  styleUrl: './abrir-chamados.component.scss',
})
export class AbrirChamadosComponent {
  filasAtendimento: filaAtendimento[] = [];

  constructor(
    private service: AbrirChamadoServiceService,
    private notificacao: ToastrService
  ) {
    this.listarTodasFilasAtendimento()
  }

  listarTodasFilasAtendimento() {
    this.service.listarTodasFilasAtendimento().subscribe({
      next(value) {
        console.log(value);
      },
    });
  }
}
