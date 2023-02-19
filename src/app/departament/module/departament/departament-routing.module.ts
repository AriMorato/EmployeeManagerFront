import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { DepartamentFormComponent } from '../../components/departament-form/departament-form.component';
import { DepartamentListComponent } from './../../components/departament-list/departament-list.component';
import { DepartamentComponent } from '../../departament.component';


const routesDep: Routes = [
 { path: '', component:DepartamentComponent},
 { path: 'listDepartamento',  pathMatch: 'prefix', component:DepartamentListComponent},
 { path: 'novoDepartamento' ,  pathMatch: 'prefix', component: DepartamentFormComponent},
 { path: 'editDepartamento',  pathMatch: 'prefix', component: DepartamentFormComponent}
];

@NgModule({
   imports: [RouterModule.forChild(routesDep)],
   exports: [RouterModule]
})
export class DepartamentRoutingModule { }
