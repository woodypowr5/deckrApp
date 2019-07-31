import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserProgress, UserProgressSerializer } from '../types/user-progress';

@Injectable({
  providedIn: 'root'
})
export class AdminHomeApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.adminHome.base;
	private userProgressSerializer = new UserProgressSerializer
	
	constructor(
		private http: HttpClient
	) { 
		this.getAllUsersProgress();		
		this.getProgressByDepartmentId(1);
		this.getProgressByUserId(365);
	}	

	getAllUsersProgress(): Observable<UserProgress[]> {
		const url =  'http://deckrwebapi.azurewebsites.net/api/adminhome';
		return this.http.get<UserProgress[]>(this.apiUrl).pipe(map(data => this.userProgressSerializer.fromJson(data)));
	}
	
	getProgressByUserId(id: number) {
		const url = `http://deckrwebapi.azurewebsites.net/api/userhome/userProgress/${id}`;
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