import {Component, OnInit} from '@angular/core';
import {DepartmentService} from '../../services/department.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {

  departments: any;
  currentDepartment = null;
  currentIndex = -1;
  title = '';
  pageNumber: number = 0;
  pageSize: number = 10;

  constructor(private departmentService: DepartmentService) {
  }

  ngOnInit(): void {
    this.retrieveDepartments();
  }

  retrieveDepartments(): void {
    this.departmentService.getPaginatedDepartments(this.pageNumber, this.pageSize)
      .subscribe(
        data => {
          this.departments = data;
        },
        error => {
          console.log(error);
        });
  }
  setActiveDepartment(department, index): void {
    this.currentDepartment = department;
    this.currentIndex = index;
  }
}
