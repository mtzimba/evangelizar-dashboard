import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxMaskModule } from 'ngx-mask'
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { CentrosRoutingModule } from './centros-routing.module';
import { CentrosFirebaseService } from './centros-firebase.service';
import { CentrosComponent } from './centros.component';
import { CentrosListComponent } from './centros-list/centros-list.component';
import { CentrosFormComponent } from './centros-form/centros-form.component';

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
    ButtonsModule,
    NgxMaskModule.forRoot(),
    CentrosRoutingModule
  ],
  providers: [
    CentrosFirebaseService
  ]
})
export class CentrosModule { }
