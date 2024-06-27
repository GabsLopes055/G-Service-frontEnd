import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  constructor(private router: Router) {}

  voltarParaDashboard() {
    this.router.navigate(['dashboard/main', sessionStorage.getItem('token')])
  }

  sair() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
