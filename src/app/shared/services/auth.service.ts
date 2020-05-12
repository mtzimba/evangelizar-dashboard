import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(
    public afAuth:AngularFireAuth, 
    public router:Router) { 

      this.afAuth.authState.subscribe(user => {
        if (user){
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
        } else {
          localStorage.setItem('user', null);
        }
      })
  }

  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['home']);
      this.user = result.user;
    }
    catch (error) {
      window.alert(error.message);
    }
  }

  async sendEmailVerification() {
    try {
      await (await this.afAuth.currentUser).sendEmailVerification()
      this.router.navigate(['verify-email']);
    }
    catch (error) {
      window.alert(error.message);
    }
  }

  async sendPasswordResetEmail(passwordResetEmail: string) {
    try {
      return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
      this.router.navigate(['login']);
    }
    catch (error) {
      window.alert(error.message);
    }
  }

  async logout(){
    try {
      await this.afAuth.signOut();
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    }
    catch (error) {
      window.alert(error.message);
    }
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }
}
