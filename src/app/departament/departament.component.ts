import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconButton } from '@angular/material/button';


import { Departament } from './model/departement';
import { DepartamentService } from './servicos/departament.service';

@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.scss']
})
export class DepartamentComponent implements OnInit {

  lstDepartaments:Observable<Departament[]> | null = null;
  dataSourse = new MatTableDataSource<Departament>();

  readonly displayedColumns = [
   'Id',
   'Title',
   'Acronym',
   'Active',
   'Actions'
  ]

  constructor(
    private restApi:DepartamentService,
    private router:Router,
    private route:ActivatedRoute

    ){
      this.refresh()
  }

/* refresh(){
  this.lstDepartaments = this.restApi.lstDepartaments
  ().pipe(
    catchError(error=>{
       console.log("deu erro")
       return of([])
    })
  )
}*/
  refresh(){
    this.restApi.lstDepartaments
    ().subscribe((res:any)=>{
      this.dataSourse = res;
    })
  }



  ngOnInit(){

  }


}
