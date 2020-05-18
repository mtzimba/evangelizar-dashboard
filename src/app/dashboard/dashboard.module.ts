import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardFirebaseService } from './dashboard-firebase.service';

@NgModule({
  declarations: [DashboardListComponent],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule
  ],
  providers: [
    DashboardFirebaseService
  ]
})
export class DashboardModule { }
