import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CentrosComponent } from './centros.component';
import { CentrosFirebaseService } from './centros-firebase.service';
import { CentrosFormComponent } from './centros-form/centros-form.component';
import { RouterModule } from '@angular/router';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CentrosListComponent } from './centros-list/centros-list.component';
import { CentrosRoutingModule } from './centros-routing.module';

@NgModule({
  declarations: [
    CentrosComponent, 
    CentrosListComponent,
    CentrosFormComponent 
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ButtonsModule,
    CentrosRoutingModule
  ],
  exports: [
    CentrosComponent,
    CentrosListComponent, 
    CentrosFormComponent
  ],
  providers: [
    CentrosFirebaseService
  ]
  
})
export class CentrosModule { }
