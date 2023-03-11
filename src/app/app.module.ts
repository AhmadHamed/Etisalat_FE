import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AddEmployeeComponent} from './components/add-employee/add-employee.component';
import {EmployeeDetailsComponent} from './components/employee-details/employee-details.component';
import {EmployeeListComponent} from './components/employees-list/employee-list.component';
import {AddDepartmentComponent} from './components/add-department/add-department.component';
import {DepartmentDetailsComponent} from './components/department-details/department-details.component';
import {DepartmentsListComponent} from './components/departments-list/departments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    AddDepartmentComponent,
    EmployeeDetailsComponent,
    DepartmentDetailsComponent,
    EmployeeListComponent,
    DepartmentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
