import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { AbrirChamadosComponent } from '../components/abrir-chamados/abrir-chamados.component';
import { CriarChamadoComponent } from '../components/criar-chamado/criar-chamado.component';

const routes: Routes = [
  {
    path: 'main/:token',
    component: MainComponent,
  },
  {
    path: 'main/:token/abrir-chamado',
    component: AbrirChamadosComponent
  },
  {
    path: 'main/:token/abrir-chamado/chamado',
    component: CriarChamadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
