import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { EmloyeeService } from '../../servicos/emloyee.service';
import { catchError, Observable, of, isEmpty } from 'rxjs';
import { Employee } from '../../model/employee';
import { EmployeeModule } from '../../module/employee/employee.module';
import { Injectable } from '@angular/core';
import { Departament } from '../../../departament/model/departement';
import { Location } from '@angular/common';


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
    dataContratacao:['']
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
          this.titulo = "Editar Departamento"
          this.btTitulo = "Atualizar"

          this.form.patchValue({
            employeeId:this.employee.employeeId,
            departamentId:this.employee.departamentId,
            guiIdEmployeeId:this.employee.guiIdEmployeeId,
            nome:this.employee.nome,
            sobrenome:this.employee.sobrenome,
            dataNascimento:this.employee.dataNascimento,
            dataContratacao:this.employee.dataContratacao
          })

      }
    }

    onSubmit(){
      this.restApi.save(this.form.value)
      //this.onCancel()
    }

    onCancel(){
     //this.location.back();
     this.router.navigateByUrl('Employee')
    }
}
