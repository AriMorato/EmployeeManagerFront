import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterEvent, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Injectable } from '@angular/core'
import { MatIcon } from '@angular/material/icon';

import { EmployeeModule } from '../../module/employee/employee.module';
import { Employee } from '../../model/employee';
import { EmloyeeService } from '../../servicos/emloyee.service';
import { Departament } from 'src/app/departament/model/departement';
import { DepartamentService } from 'src/app/departament/servicos/departament.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  lstEmployee:Observable<Employee[]> | null = null;
  lstDepartement:Observable<Departament[]> | null = null;

  dataSource = new MatTableDataSource<Employee>();
  status?:boolean;

   readonly displayedColumns = [
   'Id',
   'Nome',
   'DataContratacao',
   'Departamento',
   'Status',
   'Actions'
  ]

  constructor(
    private restApi:EmloyeeService,
    private router:Router,
    private route:ActivatedRoute,
    private restApiDep:DepartamentService
  ){
     this.restApiDep.lstDepartaments().subscribe((res:any)=>{
      this.lstDepartement = res;
    })

  }
  ngOnInit(){
    console.log(this.dataSource)
     this.refresh()
  }

  refresh(){
   this.restApi.lstEmployee
    ().subscribe((res:any)=>{
      this.dataSource = res;
    })
   }

  goToEditEmp(employee: Employee){

    var status = employee
    this.router.navigateByUrl('/Employee/editEmployee',{
      state: employee
    })
  }

  goToDelete(employee: Employee){
    this.restApi.remove(employee).subscribe()
  }
}
