import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentModule } from './departament/module/departament/departament.module';
import { EmployeeModule } from './employee/module/employee/employee.module';
import { HomeModule } from './home/module/home/home.module';
import { MaterialModuleModule } from './SharedModule/material-module/material-module.module';




@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModuleModule,
        DepartamentModule,
        EmployeeModule,
        HomeModule,
        HttpClientModule
    ],
    exports:[]
})
export class AppModule { }
