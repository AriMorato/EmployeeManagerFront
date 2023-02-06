import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, throwError } from 'rxjs';
import { catchError, delay, first, retry } from 'rxjs/operators';
import { Router, RouterEvent, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UUID } from 'angular2-uuid';
import { Departament } from '../model/departement';


@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  private readonly apiUrl = 'http://localhost:5109/api/'

  //depto:Departament;

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }

  lstDepartaments():Observable<Departament[]>{

    return this.http.get<Departament[]>(this.apiUrl + 'Departaments')
      .pipe(
        first(),
        tap(departamentos=>console.log(departamentos))
        )
  }

  save(data:Partial<Departament>){

    console.log(data)

   if(data.departamentId ){
     return this.update(data).subscribe(()=>{
      this.router.navigateByUrl('Departament')
     })
   }else{
    data.guiIdDepartamentId= UUID.UUID();
    return this.create(data).subscribe(()=>{
      this.router.navigateByUrl('Departament')
    })
    }
  }

  private create(data:Partial<Departament>){
    return this.http.post<Departament>(this.apiUrl + "Departaments", data).pipe(first());
  }

  private update(data:Partial<Departament>){
    console.log("Update")
    return this.http.put<Departament>(this.apiUrl + 'Departaments/'+ data.departamentId, data).pipe(first());
  }


  remove(data:Partial<Departament>){
    console.log("Desativa")
    data.ativo=false;
    //return this.http.delete<Departament>(this.apiUrl + 'Departaments/AlteraStatus'+ id).pipe(first());
    return this.http.put<Departament>(this.apiUrl + 'Departaments/'+ data.departamentId, data).pipe(first());
  }


}

