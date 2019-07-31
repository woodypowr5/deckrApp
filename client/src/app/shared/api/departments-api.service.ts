import { Injectable } from '@angular/core';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Department, DepartmentsSerializer} from '../types/department.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.departments.base;
	private departmentsSerializer = new DepartmentsSerializer();

	constructor(
		private http: HttpClient
	) { 
		this.getDepartments();
	}

	getDepartments(): Observable<Department[]> {
		return this.http.get<Department[]>(this.apiUrl).pipe(map(data => this.departmentsSerializer.fromJson(data)));
	}
}
