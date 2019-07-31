import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminHomeApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.adminHome.base;
	
	constructor(
		private http: HttpClient
	) { 
		this.getAllUsersProgress();		
		this.getProgressByDepartmentId(0);
		this.getProgressByUserId(365);
	}	

	getAllUsersProgress()  {
		const url = this.apiUrl;
		this.http.get<any>(this.apiUrl + '').subscribe(data =>{
			console.log(data)
		});
		// this.http.get<User[]>(this.apiUrl).pipe(map(data => this.usersSerializer.fromJson(data)));
	}
	
	getProgressByUserId(id: number) {
		const url = this.apiUrl + `/userhome/${id}`;
		this.http.get<any>(url).subscribe(data =>{
			console.log(data)
		});
	}

	getProgressByDepartmentId(id: number) {
		const url = this.apiUrl + '/' + ApiUrls.adminHome.segments.progressByDepartment + `/${id}`;
		this.http.get<any>(url).subscribe(data =>{
			console.log(data)
		});
		// this.http.get<User[]>(url);
	}
}