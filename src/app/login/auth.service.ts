import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticatedUser: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  doLogin(user: User){

    if (user.name === 'usuario@email.com' && user.password === '123456') {
      this.authenticatedUser = true;
      this.showMenuEmitter.emit(true);
      this.router.navigate(['/']);
    } else {
      this.authenticatedUser = false;
      this.showMenuEmitter.emit(false);
    }
  }

  isAuthenticatedUser(){
    return this.authenticatedUser;
  }

}
