import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent, 
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
  ],
})
export class AuthModule { }
