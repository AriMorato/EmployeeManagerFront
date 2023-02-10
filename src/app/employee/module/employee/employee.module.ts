import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from 'src/app/SharedModule/material-module/material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from '../../employee.component';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';
import { EmployeeListComponent } from '../../components/employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee-routing.module';


@NgModule({
  declarations: [
    EmployeeFormComponent,
    EmployeeListComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
