import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
/* import { DepartamentComponent } from './departament/departament.component'; */
import { EmployeeComponent } from './employee/employee.component';
import { DepartamentListComponent } from './departament/components/departament-list/departament-list.component';
import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'Departament' , component:DepartamentListComponent},
  { path: 'Employee', component:EmployeeListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
