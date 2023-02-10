import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { DepartamentFormComponent } from '../../components/departament-form/departament-form.component';
import { DepartamentListComponent } from './../../components/departament-list/departament-list.component';

const routeDep: Routes = [

  { path: 'Departament/listDepartamento', component:DepartamentListComponent},
  { path: 'Departament/listDepartamento/novoDepartamento' , component: DepartamentFormComponent},
  { path: 'Departament/listDepartamento/editDepartamento', component: DepartamentFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routeDep)],
  exports: [RouterModule]
})
export class DepartamentRoutingModule { }
