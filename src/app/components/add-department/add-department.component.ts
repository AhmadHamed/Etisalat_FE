import {Component, OnInit} from '@angular/core';
import {DepartmentService} from '../../services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  department = {
    department_name: '',
    manager_id: ''
  };
  submitted = false;

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
  }

  saveDepartment(): void {
    const data = {
      department_name: this.department.department_name,
      manager_id: this.department.manager_id
    };

    this.departmentService.create(data)
      .subscribe(
        () => {
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newDepartment(): void {
    this.department = {
      department_name: '',
      manager_id: ''
    };
    this.submitted = false;
  }

}
