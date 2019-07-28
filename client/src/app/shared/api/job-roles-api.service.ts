import { Injectable } from '@angular/core';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JobRole, JobRoleSerializer } from '../types/job-role';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JobRolesApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.jobRoles.base;
	private serializer = new JobRoleSerializer();
	
	constructor(
		private http: HttpClient
	) { 

	}

	// getJobRoles(): Observable<JobRole[]> {
	// 	// return this.http.get<JobRole[]>(this.apiUrl).pipe(map(data => this.serializer.fromJson(data)));
	// }


	getJobRoles(): Observable<string[]> {
		return this.http.get<string[]>(this.apiUrl);
	}

}
