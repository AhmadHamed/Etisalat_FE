import {Component, OnInit} from '@angular/core';
import {EmployeeService} from 'src/app/services/employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  currentEmployee = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    hire_date: new Date(),
    salary: 0,
    manager_id: '',
    department_id: ''
  };
  message: string = '';
  id: string;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    this.id = this.route.snapshot.paramMap.get('id');
    this.getEmployee(this.id);
  }

  getEmployee(id): void {
    this.employeeService.get(id)
      .subscribe(
        data => {
          this.currentEmployee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updateEmployee(): void {
    this.employeeService.update(this.id, this.currentEmployee)
      .subscribe(
        () => {
          this.message = 'The employee was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteEmployee(): void {
    this.employeeService.delete(this.id)
      .subscribe(
        () => {
          this.router.navigate(['/employees']);
        },
        error => {
          console.log(error);
        });
  }
}
