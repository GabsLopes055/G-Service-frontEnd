import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

  usuarioLogado: any = "";

  constructor() {
    this.usuarioLogado = sessionStorage.getItem("usuario-logado")
  }

}
