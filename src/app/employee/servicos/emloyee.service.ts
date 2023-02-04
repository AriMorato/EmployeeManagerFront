import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, throwError } from 'rxjs';
import { catchError, delay, first, retry } from 'rxjs/operators';
import { Router, RouterEvent, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { Employee } from '../model/employee';
import { DepartamentService } from 'src/app/departament/servicos/departament.service';
import { Departament } from 'src/app/departament/model/departement';

@Injectable({
  providedIn: 'root'
})
export class EmloyeeService {

  private readonly apiUrl = 'http://localhost:5109/api/'

  //depto:Departament;

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  lstEmployee():Observable<Employee[]>{

    return this.http.get<Employee[]>(this.apiUrl + 'Employees')
      .pipe(
        first(),
        tap(employees=>console.log(employees))
        )
  }

  lstDepartament():Observable<Departament[]>{
    return this.http.get<Departament[]>(this.apiUrl + 'Departaments')
      .pipe(first(),
      tap(departaments=>console.log(departaments))
      )
  }

  save(data:Partial<Employee>){

    console.log(data)

   if(data.employeeId){
     return this.update(data).subscribe(()=>{
      this.router.navigateByUrl('Employee')
     })
   }else{
    data.guiIdEmployeeId= UUID.UUID();
    return this.create(data).subscribe(()=>{
      this.router.navigateByUrl('Employee')
    })
    }
  }

  private create(data:Partial<Employee>){
    return this.http.post<Employee>(this.apiUrl + "Employees", data).pipe(first());
  }

  private update(data:Partial<Employee>){
    console.log("Update")
    return this.http.put<Employee>(this.apiUrl + 'Employees/'+ data.employeeId, data).pipe(first());
  }

  contaEmployee(id:number){
    return this.http.get<Employee>(this.apiUrl + 'Employees/EmployeePorDep/'+ id)
  }

  remove(data:Partial<Employee>){
    console.log("Desativa")
    data.ativo=false;
    //return this.http.delete<Departament>(this.apiUrl + 'Departaments/AlteraStatus'+ id).pipe(first());
    return this.http.put<Employee>(this.apiUrl + 'Employees/'+ data.employeeId, data).pipe(first());
  }
}
