import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DepartmentService} from '../../services/department.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  currentDepartment = {
    department_name: '',
    manager_id: ''
  };
  message = '';
  id: string;

  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDepartment(this.id);
  }

  getDepartment(id): void {
    this.departmentService.get(id)
      .subscribe(
        data => {
          this.currentDepartment = data;
        },
        error => {
          console.log(error);
        });
  }


  updateDepartment(): void {
    this.departmentService.update(this.id, this.currentDepartment)
      .subscribe(
        () => {
          this.message = 'The department was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteDepartment(): void {
    this.departmentService.delete(this.id)
      .subscribe(
        response => {
          this.router.navigate(['/departments']);
        },
        error => {
          console.log(error);
        });
  }
}
