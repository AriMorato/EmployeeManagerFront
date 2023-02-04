import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card'
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentComponent } from './departament/departament.component';
import { DepartamentModule } from './departament/module/departament/departament.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeModule } from './employee/module/employee/employee.module';

@NgModule({
    declarations: [
        AppComponent,
        DepartamentComponent,
        EmployeeComponent

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        MatCardModule,
        MatIconModule,
        DepartamentModule,
        EmployeeModule

    ]
})
export class AppModule { }
