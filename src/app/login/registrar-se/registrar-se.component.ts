import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../service/login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-se',
  templateUrl: './registrar-se.component.html',
  styleUrl: './registrar-se.component.scss',
})
export class RegistrarSeComponent {

  isLoading: boolean = true
  loginForm!: FormGroup;
  erroLogin: string = '';

  constructor(
    private FormBuilder: FormBuilder,
    private notificacao: ToastrService,
    private service: LoginService,
    private router: Router
  ) {
    this.loginForm = this.criarFormularioLogin();
    this.isLoading = false
  }

  criarFormularioLogin(): FormGroup {
    return this.FormBuilder.group({
      nomeCompleto: ['', Validators.required],
      usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      tipoUsuario: ['0', Validators.required],
    });
  }

  ngSubmit() {
    if(this.loginForm.valid) {
      this.service.realizarCadastro(this.loginForm.value).subscribe({
        next: () => {
          this.router.navigate([''])
          this.notificacao.success(
            'Faça o login usando o seu usuário cadastrado',
            'Usuário cadastrado com sucesso !',
            {
              timeOut: 5000,
              progressBar: true,
            }
          );
        },
        error: (error) => {
          this.notificacao.error(
            error.error.mensagem,
            error.error.error,
            {
              timeOut: 5000,
              progressBar: true,
            }
          );
        }
      })
    }
  }

  voltarParaTelaDeLogin() {
    this.router.navigate([''])
  }

}
