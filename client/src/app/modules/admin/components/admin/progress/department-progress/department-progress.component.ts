import { Component, OnInit, ViewChild } from '@angular/core';
import { UserProgress } from 'src/app/shared/types/user-progress';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { MatSort, MatTableDataSource } from '@angular/material';
import { DepartmentProgress } from 'src/app/shared/types/deparment-progress';
import { DepartmentsApiService } from 'src/app/shared/api/departments-api.service';

@Component({
  selector: 'app-department-progress',
  templateUrl: './department-progress.component.html',
  styleUrls: ['./department-progress.component.scss']
})
export class DepartmentProgressComponent implements OnInit {
	departments: DepartmentProgress[];
	activeDepartment: DepartmentProgress;
	displayedColumns: string[] = ['departmentID', 'name', 'completedTime', 'totalTime', 'percentComplete'];
	dataSource = new MatTableDataSource(Fixtures.departmentProgress);
  
	@ViewChild(MatSort, {static: true}) sort: MatSort;
  
	constructor(
		private departmentsApi: DepartmentsApiService
	) {
		// this.departments = this.addPercentComplete(Fixtures.departmentProgress);
		// this.departmentsApi.getDepartments().subscribe(data => {
		// 	console.log(data);
		// 	this.departments = data;
		// 	if (this.departments.length > 0) {
		// 		this.activeDepartment = this.departments[0];
		// 	}
		// });	
	}

	ngOnInit() {
		this.dataSource.sort = this.sort;
	}

	addPercentComplete(departmentProgress: DepartmentProgress[]) {
		departmentProgress.map((department: DepartmentProgress) => {
			department.percentComplete = department.completedTime / department.totalTime;
		});
		return departmentProgress;
	}

	setActiveDepartment(department: DepartmentProgress) {
		this.activeDepartment = department;
	}
}
