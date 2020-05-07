import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { CentrosComponent } from './centros.component';
import { CentrosFirebaseService } from './centros-firebase.service';
import { CentrosFormComponent } from './centros-form/centros-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CentrosComponent, 
    CentrosFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
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
