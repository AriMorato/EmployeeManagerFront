import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModuleModule } from './SharedModule/material-module/material-module.module';

/* Já deste a raiz do projeto, utilizamos por padrão o Angular Material, presente aqui atraves do módulo compartilhado MaterialModuleModule */

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
        HttpClientModule,

    ],
    exports:[]
})
export class AppModule { }
