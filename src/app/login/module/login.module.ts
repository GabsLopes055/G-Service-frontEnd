import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from '../login-component/login.component';
import { AngularMaterialModule } from '../../shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegistrarSeComponent } from '../registrar-se/registrar-se.component';
import { MatCheckboxModule } from '@angular/material/checkbox'


@NgModule({
  declarations: [LoginComponent, RegistrarSeComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
})
export class LoginModule {}
