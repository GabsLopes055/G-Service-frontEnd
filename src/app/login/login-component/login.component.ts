import { NotificacaoService } from './../../shared/notificacao/notificacao.service';
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
  isActive!: boolean;
  isLoading: boolean = true;
  loginForm!: FormGroup;
  erroLogin: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private notificacao: NotificacaoService,
    private service: LoginService,
    private router: Router
  ) {
    this.isLoading = false;
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
          next: (loginResponse) => {
            this.router.navigate(['dashboard/main', loginResponse.token]);
          },
          error: () => {
            this.notificacao.notificacaoError(
              'Erro ao realizar login !',
              'Usuário ou senha inválidos !'
            );
          },
        });
    } else {
      this.notificacao.notificacaoAviso(
        'Aviso',
        'Preencha o formulário corretamente !'
      );
    }
  }

  rotaRegistrar() {
    this.router.navigate(['registrar']);
  }

  ativarCheckBox() {
    this.isActive = true;

    if (this.isActive) {
      this.isActive = false;
    }
  }
}
