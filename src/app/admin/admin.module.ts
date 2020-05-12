import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    LoginComponent, 
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    LoginComponent, 
    ForgotPasswordComponent,
  ],
})
export class AdminModule { }
