import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/user.interface';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.users.base;
	
	constructor(
		private http: HttpClient
	) { 
	}

	getUsers(): Observable<User[]> {
		return this.http.get<User[]>(this.apiUrl);
	}
	
	getUserById(id: number): Observable<User> {
		const url = this.apiUrl + `/SingleUser/${id}`;
		return this.http.get<User>(url);
	}

	getUsersByDepartmentId(id: number): Observable<User[]> {
		const url = this.apiUrl + `/DepartmentUsers/${id}`;
		return this.http.get<User[]>(url);
	}

}