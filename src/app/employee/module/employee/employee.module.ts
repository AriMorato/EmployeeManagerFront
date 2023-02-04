import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmployeeFormComponent } from '../../components/employee-form/employee-form.component';
import { EmployeeListComponent } from '../../components/employee-list/employee-list.component';
import { EmployeeRoutingModule } from './employee-routing.module';


@NgModule({
  declarations: [
    EmployeeFormComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
