import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

 /* Lazy Loading dos módulos por demanda*/

const routes: Routes = [
  /* A HOME será sempre a página incial da aplicação*/
  { path: '',
    loadChildren: ()=>import('./home/module/home/home.module').then(m=>m.HomeModule)
  },
  { path: 'Departament' ,
    loadChildren: ()=>import('./departament/module/departament/departament.module').then(m=>m.DepartamentModule)
  },
  { path: 'Employee',
    loadChildren: ()=>import('./employee/module/employee/employee.module').then(m=>m.EmployeeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
