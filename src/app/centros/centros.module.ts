import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxMaskModule, IConfig } from 'ngx-mask'

import { CentrosComponent } from './centros.component';
import { CentrosFirebaseService } from './centros-firebase.service';
import { CentrosFormComponent } from './centros-form/centros-form.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';

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
    FormsModule,
    RouterModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(),
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
