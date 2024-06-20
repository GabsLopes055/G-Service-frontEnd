import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { min } from 'rxjs';
import { LoginService } from '../service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  isLoading: boolean = true
  loginForm!: FormGroup;
  erroLogin: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private notificacao: ToastrService,
    private service: LoginService,
    private router: Router
  ) {
    this.isLoading = false
    this.loginForm = this.criarFormularioLogin();
  }

  criarFormularioLogin(): FormGroup {
    return this.formBuilder.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngSubmit() {
    if (this.loginForm.valid) {
      this.service
        .realizarLogin(
          this.loginForm.value.usuario,
          this.loginForm.value.password
        )
        .subscribe({
          next: () => {
            this.notificacao.success(
              'Login Realizado com sucesso !',
              'Realizado Login',
              {
                timeOut: 5000,
                progressBar: true,
              }
            );
          },
          error: () => {
            this.notificacao.error(
              'Erro ao realizar login',
              'Usuário ou senha inválidos !',
              {
                timeOut: 5000,
                progressBar: true,
              }
            );
          },
        });
    } else {
      this.notificacao.error('Preencha o formulário corretamente !', 'Erro', {
        timeOut: 5000,
        progressBar: true,
      });
    }
  }

  rotaRegistrar() {
    this.router.navigate(['registrar'])
  }
}
