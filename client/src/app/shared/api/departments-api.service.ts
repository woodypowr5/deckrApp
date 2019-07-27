import { Injectable } from '@angular/core';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.departments;
	
	constructor(
		private http: HttpClient
	) { 

	}

	getDepartments(): Observable<string[]> {
		return this.http.get<string[]>(this.apiUrl);
	}
}
