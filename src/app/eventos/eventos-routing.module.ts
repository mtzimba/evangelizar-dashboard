import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosComponent } from './eventos.component';
import { EventosListComponent } from './eventos-list/eventos-list.component';
import { EventosFormComponent } from './eventos-form/eventos-form.component';

import { AuthGuard } from '../shared/guard/auth.guard';

const eventosRoutes: Routes = [

  { path: '', component: EventosComponent, canActivate: [AuthGuard], 
    children: [
      { path: '', component: EventosListComponent },
      { path: 'novo', component: EventosFormComponent },
      { path: ':id/editar', component: EventosFormComponent },
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(eventosRoutes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
