import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, throwError } from 'rxjs';
import { catchError, delay, first, retry } from 'rxjs/operators';

import { Departament } from '../model/departement';


@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  private readonly apiUrl = 'http://localhost:5109/api/'

  constructor(private http:HttpClient) { }

  lstDepartaments(){

    return this.http.get<Departament[]>(this.apiUrl + 'Departaments')
      .pipe(
        first(),
        tap(departamentos=>console.log(departamentos))
        )
  }
}
