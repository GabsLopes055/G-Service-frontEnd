import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login-component/login.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngularMaterialModule
    ]
})
export class LoginModule { }