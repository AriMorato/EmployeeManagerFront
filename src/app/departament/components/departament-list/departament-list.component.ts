import { Component, OnInit, Output} from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { DepartamentModule } from '../../module/departament/departament.module';
//import { Employee } from '../../model/employee'; preciso criar o model de employee para carregar a lista e poder deletar
import { Departament } from '../../model/departement';
import { DepartamentService } from '../../servicos/departament.service';


@Component({
  selector: 'app-departament-list',
  templateUrl: './departament-list.component.html',
  styleUrls: ['./departament-list.component.scss']
})
export class DepartamentListComponent implements OnInit {

  lstDepartaments:Observable<Departament[]> | null = null;
  //lstDepartaments:Observable<Employee[]> | null = null; declarar a lista para popular com a lista de empregados
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

    var status = departamento
    this.router.navigateByUrl('/Departament/editDepartamento',{
      state: departamento
    })
  }

  goToDelete(departamento: Departament){


    this.restApi.remove(departamento).subscribe(()=>{
      this.router.navigateByUrl('Departament')
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
