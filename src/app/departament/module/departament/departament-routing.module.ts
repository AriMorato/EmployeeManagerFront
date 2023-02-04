import { DepartamentListComponent } from './../../components/departament-list/departament-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentFormComponent } from '../../components/departament-form/departament-form.component';

const routes: Routes = [

  { path: 'Departament', component:DepartamentListComponent },
  { path: 'Departament/novoDepartamento' , component: DepartamentFormComponent},
  { path: 'Departament/editDepartamento', component: DepartamentFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentRoutingModule { }
