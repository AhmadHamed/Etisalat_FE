import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeListComponent} from './components/employees-list/employee-list.component';
import {EmployeeDetailsComponent} from './components/employee-details/employee-details.component';
import {AddEmployeeComponent} from './components/add-employee/add-employee.component';
import {DepartmentsListComponent} from './components/departments-list/departments-list.component';
import {DepartmentDetailsComponent} from './components/department-details/department-details.component';
import {AddDepartmentComponent} from './components/add-department/add-department.component';

const routes: Routes = [
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employees/:id', component: EmployeeDetailsComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'departments', component: DepartmentsListComponent},
  {path: 'departments/:id', component: DepartmentDetailsComponent},
  {path: 'add-department', component: AddDepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
