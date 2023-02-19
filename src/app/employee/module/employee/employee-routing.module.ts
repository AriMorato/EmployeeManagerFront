
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './../../components/employee-list/employee-list.component';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';
import { EmployeeComponent } from '../../employee.component';

const routesEmp: Routes = [
  
  { path: '', component:EmployeeComponent},
  { path: 'listEmployee',  pathMatch: 'prefix', component:EmployeeListComponent },
  { path: 'novoEmployee' , pathMatch: 'prefix', component: EmployeeFormComponent},
  { path: 'editEmployee', pathMatch: 'prefix', component: EmployeeFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routesEmp)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
