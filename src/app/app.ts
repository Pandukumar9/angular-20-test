import { Component } from '@angular/core';
import { Account } from './account/account';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [Account,User],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'angular-20-test';
}
