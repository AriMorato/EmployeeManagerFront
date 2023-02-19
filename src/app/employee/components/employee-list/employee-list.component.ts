import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of} from 'rxjs';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute} from '@angular/router';
import { Employee } from '../../model/employee';
import { EmloyeeService } from '../../servicos/emloyee.service';
import { Departament } from 'src/app/departament/model/departement';
import { DepartamentService } from 'src/app/departament/servicos/departament.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  lstEmployee:Observable<Employee[]> | null = null;
  lstDepartement:Observable<Departament[]> | null = null;

  postCriteria:any;

  /* dataSource = new MatTableDataSource<Employee>(); */
  dataSourse !: MatTableDataSource<Employee>;


  @ViewChild(MatPaginator) paginator !: MatPaginator
  /*  @ViewChild(MatSort) sort !: MatSort */
  @ViewChild('empMatSort') sort !: MatSort



  status?:boolean;


   readonly displayedColumns = [
   'employeeId',
   'nome',
   'dataContratacao',
   'departamentId',
   'ativo',
   'Actions'
  ]

  constructor(
    private formBuilder:NonNullableFormBuilder,
    private restApi:EmloyeeService,
    private restApiDep:DepartamentService,
    private router:Router
  ){
      this.restApiDep.lstDepartaments().subscribe((res:any)=>{
      this.lstDepartement = res;

      this.refresh();
    })

  }


  ngOnInit(){
   /*  console.log(this.dataSource)
     this.refresh() */
  }


  form = this.formBuilder.group({
    buscaTitulo:''
  })


  refresh(){

    if(this.form.controls.buscaTitulo.value!=''){
      this.form.controls.buscaTitulo.reset()
    }
    
   this.restApi.lstEmployee
    ().subscribe((res:any)=>{
      this.postCriteria = res;
      this.dataSourse = new MatTableDataSource(this.postCriteria);
      this.dataSourse.paginator = this.paginator;

      this.dataSourse.sort = this.sort
      console.log(this.postCriteria)
    })
   }

  goToEditEmp(employee: Employee){
    if(! employee.ativo==false){
      var status = employee
      this.router.navigateByUrl('/Employee/editEmployee',{
        state: employee
      })
    }
  }

  goToDelete(employee: Employee){
    this.restApi.remove(employee).subscribe()
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
