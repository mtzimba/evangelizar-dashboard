import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentrosComponent } from './centros.component';
import { CentrosFormComponent } from './centros-form/centros-form.component';

const centrosRoutes: Routes = [

  { path: 'centros', component: CentrosComponent },
  { path: 'centros/novo', component: CentrosFormComponent },
  { path: 'centros/:id/editar', component: CentrosFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(centrosRoutes)],
  exports: [RouterModule]
})

export class CentrosRoutingModule { }
