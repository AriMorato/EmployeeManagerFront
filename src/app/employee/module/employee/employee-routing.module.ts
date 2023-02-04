
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './../../components/employee-list/employee-list.component';
import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';

const routes: Routes = [
  { path: 'Employees', component:EmployeeListComponent },
  { path: 'Employee/novoEmployee' , component: EmployeeFormComponent},
  { path: 'Employee/editEmployee', component: EmployeeFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
