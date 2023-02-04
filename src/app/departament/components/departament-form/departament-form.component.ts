import { first } from 'rxjs/operators';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { DepartamentModule } from '../../module/departament/departament.module';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { isEmpty, Observable } from 'rxjs';
import { DepartamentService } from '../../servicos/departament.service';
import { Router, RouterEvent, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Injectable } from '@angular/core';
import { Departament } from '../../model/departement';


 @Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-departament-form',
  templateUrl: './departament-form.component.html',
  styleUrls: ['./departament-form.component.scss']
})
export class DepartamentFormComponent implements OnInit {

  titulo:string = 'Novo Departamento';
  btTitulo:string = 'Salvar';
  guiId:string = '';

  departamento: any;

  form = this.formBuilder.group({
    departamentId:[0],
    guiIdDepartamentId:'',
    titulo:[''],
    sigla:[''],
    ativo :[true]
    })

   constructor(
        private formBuilder:NonNullableFormBuilder,
        private router:Router,
        private location:Location,
        private restApi:DepartamentService
     ){
        const nav = this.router.getCurrentNavigation();
        this.departamento =<Departament>nav?.extras.state;
  }

   ngOnInit(){
      //verifica se o console trouxe um guiId

      if(this.departamento != null){
        this.titulo = "Editar Departamento"
        this.btTitulo = "Atualizar"

        this.form.patchValue({
          departamentId:this.departamento.departamentId,
          guiIdDepartamentId:this.departamento.guiIdDepartamentId,
          titulo:this.departamento.titulo,
          sigla:this.departamento.sigla,
          ativo:this.departamento.ativo
        })
      }

  }

  onSubmit(){
    this.restApi.save(this.form.value)
    //this.onCancel()
  }

  onCancel(){
   //this.location.back();
   this.router.navigateByUrl('Departament')
  }
}
