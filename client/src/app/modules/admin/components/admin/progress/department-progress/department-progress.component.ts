import { Component, OnInit, ViewChild } from '@angular/core';
import { UserProgress } from 'src/app/shared/types/user-progress';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { MatSort, MatTableDataSource } from '@angular/material';
import { DepartmentProgress } from 'src/app/shared/types/deparment-progress';
import { DepartmentsApiService } from 'src/app/shared/api/departments-api.service';
import { Department } from 'src/app/shared/types/department.interface';
import { AdminHomeApiService } from 'src/app/shared/api/admin-home-api.service';

@Component({
  selector: 'app-department-progress',
  templateUrl: './department-progress.component.html',
  styleUrls: ['./department-progress.component.scss']
})
export class DepartmentProgressComponent implements OnInit {
	availableDepartments: Department[] = []
	activeDepartment: Department;
	displayedColumns: string[] = ['departmentID', 'name', 'completedTime', 'totalTime', 'percentComplete'];
	dataSource: any;
	activeProgressData: UserProgress[];
	departmentCompletedTime: number;
	departmentTotalTime: number;
  
	@ViewChild(MatSort, {static: true}) sort: MatSort;
  
	constructor(
		private departmentsApi: DepartmentsApiService,
		private adminHomeApi: AdminHomeApiService
	) {
		this.departmentsApi.getDepartments().subscribe((departments: Department[]) => {
			this.availableDepartments = departments;
			this.setActiveDepartment(this.availableDepartments[0]);
		});	
	}

	ngOnInit() { }

	addPercentComplete(departmentProgress: DepartmentProgress[]) {
		departmentProgress.map((department: DepartmentProgress) => {
			department.percentComplete = department.completedTime / department.totalTime;
		});
		return departmentProgress;
	}


	activeDepartmentSelected(department: Department): void {
		this.activeDepartment = department;
		this.setActiveDepartment(department);
	}


	setActiveDepartment(department: Department) {
		this.adminHomeApi.getProgressByDepartmentId(department.id).subscribe((userProgressData: UserProgress[]) => {
			console.log(userProgressData)
			this.activeProgressData = userProgressData;
			this.dataSource = new MatTableDataSource(userProgressData);
			this.dataSource.sort = this.sort;
			this.activeDepartment = department;
			this.computeDepartmentProgress();
		});
	}

	computeDepartmentProgress() {
		let sumTotalTime = 0;
		let sumCompletedTime: number = 0;
		this.activeProgressData.map((userProgress: UserProgress) => {
			sumCompletedTime += userProgress.completedTime;
			sumTotalTime += userProgress.totalTime;
		});
		this.departmentCompletedTime = sumCompletedTime;
		this.departmentTotalTime = sumTotalTime;
	}
}
