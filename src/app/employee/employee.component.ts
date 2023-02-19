import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  constructor(
    private router:Router
  ){}

  ngOnInit(){}

  
  onRoute(data:String){
    var navUrl:string=''

    switch (data) {
      case 'list':
        navUrl = 'Employee/listEmployee'
        break;
      case 'novo':
        navUrl = 'Employee/novoEmployee'
          break;
      case 'edit':
        navUrl = 'Employee/editEmployee'
        break;
      default: navUrl = ''
        break;
    }
    this.router.navigateByUrl(navUrl)
    }
}
