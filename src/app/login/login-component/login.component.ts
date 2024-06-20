import { loginRequest } from './../../models/loginRequest';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { min } from 'rxjs';
import { LoginService } from '../service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private notificacao: ToastrService,
    private service: LoginService
  ) {
    this.loginForm = this.criarFormularioLogin();
  }

  criarFormularioLogin(): FormGroup {
    return this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngSubmit() {
    if (this.loginForm.valid) {
      this.service.realizarLogin(this.loginForm.value.usuario, this.loginForm.value.password).subscribe({
        next: () => {
          this.notificacao.success('Login Realizado com sucesso !', 'Realizado Login', {
            timeOut: 5000,
            progressBar: true
          });
        },
        error: () => {
          this.notificacao.error('Erro ao realizar login', 'Usuário ou senha inválidos !', {
            timeOut: 5000,
            progressBar: true
          });
        }
      });
    } else {
      this.notificacao.error('Preencha o formulário corretamente !', 'Erro', {
        timeOut: 5000,
        progressBar: true
      });
    }
  }
}
