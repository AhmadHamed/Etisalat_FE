import {Component, OnInit} from '@angular/core';
import {EmployeeService} from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any;
  currentEmployee = null;
  currentIndex: number = -1;
  title: string = '';
  pageNumber: number = 0;
  pageSize: number = 10;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.retrieveEmployees();
  }

  retrieveEmployees(): void {
    this.employeeService.getPaginatedEmployees(this.pageNumber, this.pageSize)
      .subscribe(
        data => {
          this.employees = data;
        },
        error => {
          console.log(error);
        });
  }
  setActiveEmployee(employee, index): void {
    this.currentEmployee = employee;
    this.currentIndex = index;
  }
}
