import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DynamicStyleDirective } from '../dynamic-style.directive';

@Component({
  selector: 'app-user',
  imports: [CommonModule,DynamicStyleDirective],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User implements OnInit {

  group = {
    name: 'User',
    description: 'This is the user group.',
    members: [
      { name: 'Alice', role: 'Admin' },
      { name: 'Bob', role: 'User' },
      { name: 'Charlie', role: 'Guest' }
    ]
  };

  // group = {
  //   'name': undefined,
  //   'default': null
  // }

  propName = 'user';

  constructor() {
    // Initialization logic can go here
  }

  ngOnInit() {
    // Component initialization logic can go here
  }

  user = "Pandukumar";
  group1 = "guest";

  consoleGreeting(strings: TemplateStringsArray, ...values: any[]) {
    return strings.reduce((result, str, i) => {
      return result + str + (values[i] || '');
    }, '');
  }

  getName() {
    return this.user;
  }

  getId() {
    return 12345;
  }

  getfname() {
    return 'Pandu';
  }

  getlname() {
    return 'Kumar';
  }

  imageText(strings: TemplateStringsArray, ...values: any[]) {
    return strings.reduce((result, str, i) => {
      return result + str + (values[i] || '');
    }, '');
  }

}
