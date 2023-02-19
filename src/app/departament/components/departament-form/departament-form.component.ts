import { Location } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Departament } from '../../model/departement';
import { DepartamentService } from '../../servicos/departament.service';


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
        private restApi:DepartamentService,
        private activatedRoute: ActivatedRoute
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
  }

  onCancel(){
   console.log(this.router.url)
   this.router.navigateByUrl('Departament/listDepartamento')
  }
}
