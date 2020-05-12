import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CentrosComponent } from './centros.component';
import { CentrosFirebaseService } from './centros-firebase.service';
import { CentrosFormComponent } from './centros-form/centros-form.component';
import { RouterModule } from '@angular/router';

import { ButtonsModule } from 'ngx-bootstrap/buttons';

@NgModule({
  declarations: [
    CentrosComponent, 
    CentrosFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ButtonsModule
  ],
  exports: [
    CentrosComponent, 
    CentrosFormComponent
  ],
  providers: [
    CentrosFirebaseService
  ]
  
})
export class CentrosModule { }
