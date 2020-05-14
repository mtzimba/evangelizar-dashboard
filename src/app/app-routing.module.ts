import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const dashboardModule = () => import('./dashboard/dashboard.module').then(x => x.DashboardModule);
const centrosModule = () => import('./centros/centros.module').then(x => x.CentrosModule);
const eventosModule = () => import('./eventos/eventos.module').then(x => x.EventosModule);
const authModule = () => import('./auth/auth.module').then(x => x.AuthModule);

const routes: Routes = [

  { path: 'dashboard', loadChildren: dashboardModule},
  { path: 'centros', loadChildren: centrosModule },
  { path: 'eventos', loadChildren: eventosModule },
  { path: 'auth', loadChildren: authModule},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
