import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosComponent } from './eventos.component';
import { AuthGuard } from '../shared/guard/auth.guard';


const eventosRoutes: Routes = [

  { path: '', component: EventosComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(eventosRoutes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
