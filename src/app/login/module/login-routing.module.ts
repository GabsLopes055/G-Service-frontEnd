import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login-component/login.component';
import { RegistrarSeComponent } from '../registrar-se/registrar-se.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }, {
    path: 'registrar',
    component: RegistrarSeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
