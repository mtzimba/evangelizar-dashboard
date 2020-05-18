import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxMaskModule } from 'ngx-mask'
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosFirebaseService } from './eventos-firebase.service';
import { EventosComponent } from './eventos.component';
import { EventosListComponent } from './eventos-list/eventos-list.component';
import { EventosFormComponent } from './eventos-form/eventos-form.component';


@NgModule({
  declarations: [
    EventosComponent, 
    EventosListComponent, 
    EventosFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonsModule,
    NgxMaskModule.forRoot(),
    EventosRoutingModule
  ],
  providers: [
    EventosFirebaseService
  ]
})
export class EventosModule { }
