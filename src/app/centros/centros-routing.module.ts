import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentrosComponent } from './centros.component';
import { CentrosFormComponent } from './centros-form/centros-form.component';
import { CentrosListComponent } from './centros-list/centros-list.component';

import { AuthGuard } from '../shared/guard/auth.guard';

const centrosRoutes: Routes = [

  { path: '', component: CentrosComponent, canActivate: [AuthGuard], 
    children: [
      { path: '', component: CentrosListComponent },
      { path: 'novo', component: CentrosFormComponent },
      { path: ':id/editar', component: CentrosFormComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(centrosRoutes)],
  exports: [RouterModule]
})

export class CentrosRoutingModule { }
