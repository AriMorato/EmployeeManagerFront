import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/SharedModule/material-module/material-module.module';

import { DepartamentFormComponent } from '../../components/departament-form/departament-form.component';
import { DepartamentListComponent } from '../../components/departament-list/departament-list.component';
import { DepartamentComponent } from '../../departament.component';
import { DepartamentRoutingModule } from './departament-routing.module';




@NgModule({
  declarations: [
   DepartamentListComponent,
   DepartamentFormComponent,
   DepartamentComponent
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    DepartamentRoutingModule,
    RouterModule
  ],
  providers:[]
})
export class DepartamentModule { }
