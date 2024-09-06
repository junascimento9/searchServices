import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';

  constructor() {}

  enterApp() {
    if (this.username.trim() !== '') {
      console.log('Nome do usuário:', this.username);
      // Aqui você pode implementar o que acontece após o login
    } else {
      console.log('Por favor, insira o nome');
    }
  }
}