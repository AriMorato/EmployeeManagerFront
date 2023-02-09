import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/employee/model/employee';

import { EmloyeeService } from '../../../employee/servicos/emloyee.service';
import { Departament } from '../../model/departement';
import { DepartamentService } from '../../servicos/departament.service';




@Component({
  selector: 'app-departament-list',
  templateUrl: './departament-list.component.html',
  styleUrls: ['./departament-list.component.scss']
})
export class DepartamentListComponent implements OnInit {

  lstDepartaments:Observable<Departament[]> | null = null;
  lstEmployee:Observable<Employee[]> | null = null;

  contaEmployee:number=0;
  dataSourse = new MatTableDataSource<Departament>();
  status?:boolean;

   readonly displayedColumns = [
   'Id',
   'Titulo',
   'Sigla',
   'Status',
   'Action'
  ]

  constructor(
    private restApi:DepartamentService,
    private restApiEmployee:EmloyeeService,
    private router:Router,
    private route:ActivatedRoute,

  ){}


  ngOnInit(){
    console.log("Ari")
    this.refresh()
  }

  refresh(){
    this.restApi.lstDepartaments
    ().subscribe((res:any)=>{
      this.dataSourse = res;
    })
  }

  goToEditDep(departamento: Departament){
    if(!departamento.ativo==false){
        var status = departamento
        this.router.navigateByUrl('/Departament/editDepartamento',{
          state: departamento
        })
      }
    }

  goToDelete(departamento: Departament){
    this.restApiEmployee.contaEmployee(departamento.departamentId).subscribe((res:any)=>{
      this.lstEmployee = res
      for(let item in this.lstEmployee ){
        if(item!=''){
          this.contaEmployee++;
        }
      }
     if(this.contaEmployee==0){
      this.restApi.remove(departamento).subscribe()
      this.router.navigateByUrl('Departament')
     }
    })
   
  }
  /*
  onResolve(){

  }
  onAdd(){
  }

 loadEdit(departament:any){
   console.log(departament)
    var guiId: string = departament.guiIdDepartamentId
    var guiIdplus = guiId.split('-').join('$');

   this.router.navigate(['editDepartamento', guiIdplus],{relativeTo:this.route} )


  } */


}
