import { Injectable } from '@angular/core';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobRolesApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.jobRoles;
	
	constructor(
		private http: HttpClient
	) { 

	}

	getJobRoles(): Observable<string[]> {
		return this.http.get<string[]>(this.apiUrl);
	}
}
