import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserProgress, UserProgressSerializer } from '../types/user-progress';
import { ModuleProgress, ModuleProgressSerializer } from '../types/module-progress';

@Injectable({
  providedIn: 'root'
})
export class AdminHomeApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.adminHome.base;
	private userProgressSerializer = new UserProgressSerializer;
	private moduleProgressSerializer = new ModuleProgressSerializer;
	
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
	
	getProgressByUserId(id: number): Observable<UserProgress[]> {
		const url = `http://deckrwebapi.azurewebsites.net/api/userhome/userProgress/${id}`;
		return this.http.get<UserProgress[]>(this.apiUrl).pipe(map(data => this.userProgressSerializer.fromJson(data)));
	}

	getProgressByDepartmentId(id: number): Observable<UserProgress[]>  {
		const url = this.apiUrl + '/' + ApiUrls.adminHome.segments.progressByDepartment + `/${id}`;
		return this.http.get<UserProgress[]>(this.apiUrl).pipe(map(data => this.userProgressSerializer.fromJson(data)));
	}
}