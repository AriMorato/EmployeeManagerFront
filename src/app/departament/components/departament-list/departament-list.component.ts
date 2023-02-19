import { Component, OnInit, ViewChild } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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

  /*  Esta coleção é populada apenas para verificar sr um departamento tem funcionários.
      Caso tenha o Departamento não poderá ser Inativado */
  lstEmployee:Observable<Employee[]> | null = null;

  //propriedade que representa o critério de filtro
  postCriteria:any;

  //propriedade de contagem do número de funcionários em um departamento
  contaEmployee:number=0;

  //criação de uma propriedade de tipo MatDataSource, este tipado com Departamento
  dataSourse !: MatTableDataSource<Departament>;

  //aqui são criados os states
  @ViewChild(MatPaginator) paginator !: MatPaginator
  /*  @ViewChild(MatSort) sort !: MatSort */
  @ViewChild('depMatSort') sort !: MatSort
  status?:boolean;

   readonly displayedColumns = [
   'departamentId',
   'titulo',
   'sigla',
   'ativo',
   'Action'
  ]


  constructor(
    private formBuilder:NonNullableFormBuilder,
    private restApi:DepartamentService,
    private restApiEmployee:EmloyeeService,
    private router:Router
  ){
    this.refresh();
  }

  form = this.formBuilder.group({
    buscaTitulo:''
  })

  ngOnInit(){
   
  }


  refresh(){

    if(this.form.controls.buscaTitulo.value!=''){
      this.form.controls.buscaTitulo.reset()
    }

    this.restApi.lstDepartaments
    ().subscribe((res:any)=>{
      this.postCriteria = res;
      this.dataSourse = new MatTableDataSource(this.postCriteria);
      this.dataSourse.paginator = this.paginator;

      this.dataSourse.sort = this.sort
      console.log(this.postCriteria)
    })

  }


  goToEditDep(departamento: Departament){
    if(!departamento.ativo==false){
        var status = departamento
        this.router.navigateByUrl('Departament/editDepartamento',{
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
      this.router.navigateByUrl('Departament/listDepartamento')
     }
    })

  }

  applyFilter(event:Event ){
    const filterPost  = (event.target as HTMLInputElement).value
    //const filterPost = this.form.controls.buscaTitulo.value;
    this.dataSourse.filter = filterPost.trim().toLowerCase();
    if(this.dataSourse.paginator){
      this.dataSourse.paginator.firstPage()
    }
  }

}
