import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './eventos.component';


const eventosRoutes: Routes = [

  { path: 'eventos', component: EventosComponent },

];

@NgModule({
  imports: [RouterModule.forChild(eventosRoutes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
