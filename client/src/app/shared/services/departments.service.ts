import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { DepartmentsApiService } from '../api/departments-api.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
	departmentsChanged: BehaviorSubject<string[]> = new BehaviorSubject([]);

  	constructor(
		private departmentsApi: DepartmentsApiService	 
	) {
		// this.departmentsApi.getDepartments().subscribe((departments: string[]) => {
		// 	this.departmentsChanged.next(departments);
		// });
	}	
}
