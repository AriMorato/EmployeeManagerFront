import { Location } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Departament } from '../../../departament/model/departement';
import { Employee } from '../../model/employee';
import { EmloyeeService } from '../../servicos/emloyee.service';


@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})

export class EmployeeFormComponent implements OnInit {

  lstDepartaments:Observable<Departament[]> | null = null;

  titulo:string = 'Novo Employee';
  btTitulo:string = 'Salvar';
  guiId:string = '';

  employee: any;

  form = this.frmBuilder.group({
    employeeId:[0],
    departamentId:[0],
    guiIdEmployeeId:[''],
    nome:[''],
    sobrenome:[''],
    dataNascimento:[''],
    dataContratacao:[''],
    ativo:[true]
    })

    constructor(
      private frmBuilder:NonNullableFormBuilder,
      private restApi:EmloyeeService,
      private location:Location,
      private router:Router,
      private route:ActivatedRoute,

    ){
      const nav = this.router.getCurrentNavigation();
      this.employee =<Employee>nav?.extras.state;
    }
      ngOnInit(){

        this.restApi.lstDepartament().subscribe((res:any)=>{
          this.lstDepartaments = res;
        })

        if(this.employee != null){
          this.titulo = "Editar Employee"
          this.btTitulo = "Atualizar"

          this.form.patchValue({
            employeeId:this.employee.employeeId,
            departamentId:this.employee.departamentId,
            guiIdEmployeeId:this.employee.guiIdEmployeeId,
            nome:this.employee.nome,
            sobrenome:this.employee.sobrenome,
            dataNascimento:this.employee.dataNascimento,
            dataContratacao:this.employee.dataContratacao,
            ativo:this.employee.ativo
          })

      }

    }

    onSubmit(){
      this.restApi.save(this.form.value)
      this.router.navigateByUrl('Employee/listEmployee')
    }

    onCancel(){
     //this.location.back();
     this.router.navigateByUrl('Employee/listEmployee')
    }
}
