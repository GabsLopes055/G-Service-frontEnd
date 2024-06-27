import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   // path: '**', redirectTo: ''
  // },
  {
    path: '',
    loadChildren: () =>
      import('../app/login/module/login.module').then(
        (loginModule) => loginModule.LoginModule
      ),
  }, {
    path: 'dashboard',
    loadChildren: () =>
      import('../app/main/module/main.module').then(
        (mainModule) => mainModule.MainModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
