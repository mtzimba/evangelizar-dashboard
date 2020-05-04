import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { EvangelizationCenterListComponent } from './evangelization-center-list/evangelization-center-list.component';
import { EvangelizationCenterFormComponent } from './evangelization-center-form/evangelization-center-form.component';
import { EvangelizationCenterEditComponent } from './evangelization-center-edit/evangelization-center-edit.component';
import { EvangelizationCenterFirebaseService } from './evangelization-center-firebase.service';

@NgModule({
  declarations: [
    EvangelizationCenterListComponent, 
    EvangelizationCenterFormComponent, 
    EvangelizationCenterEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    EvangelizationCenterListComponent, 
    EvangelizationCenterFormComponent, 
    EvangelizationCenterEditComponent
  ],
  providers: [
    EvangelizationCenterFirebaseService
  ]
  
})
export class EvangelizationCenterModule { }
