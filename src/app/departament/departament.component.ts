import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router';



@Component({
  selector: 'app-departament',
  templateUrl: './departament.component.html',
  styleUrls: ['./departament.component.scss']
})
export class DepartamentComponent implements OnInit {


  constructor(
    private router:Router
  ){}

  ngOnInit(){}


  onRoute(data:String){
    var navUrl:string=''

    switch (data) {
      case 'list':
        navUrl = 'Departament/listDepartamento'
        break;
      case 'novo':
        navUrl = 'Departament/novoDepartamento'
          break;
      case 'edit':
        navUrl = 'Departament/editDepartamento'
        break;
      default: navUrl = ''
        break;
    }
    /*  console.log(this.activatedRouter.firstChild?.fragment)
    console.log(this.activatedRouter.routeConfig?.path?.)*/
    this.router.navigateByUrl(navUrl)
    }
}
