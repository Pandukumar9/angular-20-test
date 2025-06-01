import { Routes } from '@angular/router';
import { Account } from './account/account';
import { Observable } from 'rxjs';

export const routes: Routes = [
  // { path: '', 
  //   redirectTo: '/account',
  //   pathMatch: 'full' 
  // }, old syntax string format
  // {
  //    path: '', 
  //   redirectTo: () => {
  //     return '/account';
  //   }, // new syntax function format
  //   // in this case ,this redirect happened immediately after this funcion returns
  //   // so it is not necessary to return a string
  //   // but it is possible to return a string
  //   // or a function that returns a string
  //   // or a function that returns a promise that resolves to a string
  //   // or a function that returns an observable that emits a string
  //   // or a function that returns a signal that emits a string
  //   // or a function that returns a signal that emits a promise that resolves to a string
  //   // or a function that returns a signal that emits an observable that emits a string
  //   pathMatch: 'full' 
  // },
  // {
  //   path: '', 
  //   redirectTo: () => {
  //     return new Promise(resolve => {
  //       setTimeout(() => {
  //         resolve('/account');
  //       }, 1000); // Simulate async operation
  //     });
  //   },
  //   pathMatch: 'full'
  // },
  {
    path: '', 
    redirectTo: () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('/account');
        }, 1000); // Simulate async operation
      });
    },
    pathMatch: 'full'
  },
    {
    path: '', 
    redirectTo: () => {
      return new Observable<string>(observer => {
        setTimeout(() => {
          // Any login or checks can be done here
          // For example, checking user authentication status
          // If authenticated, redirect to '/account'
          // If not authenticated, redirect to '/login' or similar
          // Here we just redirect to '/account' after 1 second
          // This simulates an asynchronous operation, like an API call
          // observer.next('/login'); // Uncomment to redirect to login 
          // observer.next('/home'); // Uncomment to redirect to home
          // observer.next('/dashboard'); // Uncomment to redirect to dashboard
          observer.next('/account');  
          observer.complete();
        }, 1000); // Simulate async operation
      });
    },
    pathMatch: 'full'
  },
  { path: 'account', component: Account}
  // { path: 'account', loadComponent: () => import('./account/account').then(m => m.Account) },
  // { path: 'chat', loadComponent: () => import('./chat/chat').then(m => m.Chat) },
];
