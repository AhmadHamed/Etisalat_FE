import {Component, OnInit} from '@angular/core';
import {EmployeeService} from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    hire_date: new Date(),
    salary: 0,
    manager_id: '',
    department_id: ''
  };
  submitted = false;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    const data = {
      first_name: this.employee.first_name,
      last_name: this.employee.last_name,
      email: this.employee.email,
      phone_number: this.employee.phone_number,
      hire_date: new Date(),
      salary: this.employee.salary,
      manager_id: this.employee.manager_id,
      department_id: this.employee.department_id
    };

    this.employeeService.create(data)
      .subscribe(
        () => {
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      hire_date: new Date(),
      salary: 1000,
      manager_id: '',
      department_id: ''
    };
  }

}
