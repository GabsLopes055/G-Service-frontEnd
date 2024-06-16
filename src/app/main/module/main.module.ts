import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from '../components/main/main.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { ToolbarComponent } from '../../toolbar/components/toolbar/toolbar.component';
import { AbrirChamadosComponent } from '../components/abrir-chamados/abrir-chamados.component';


@NgModule({
  declarations: [
    MainComponent,
    AbrirChamadosComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngularMaterialModule,
  ]
})
export class MainModule { }
