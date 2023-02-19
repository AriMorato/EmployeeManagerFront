import { Component } from '@angular/core';
/* O único papel deste componente é exibir o HTML com o cabeçalho da aplicação e os botões de acesso a cada àrea da solução */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EmployeeManager';
}
