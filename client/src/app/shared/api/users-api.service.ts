import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, UserSerializer, UsersSerializer } from '../types/user.interface';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.users.base;
	private userSerializer = new UserSerializer();
	private usersSerializer = new UsersSerializer();
	
	constructor(
		private http: HttpClient
	) { 
		
	}

	getUsers(): Observable<User[]> {
		return this.http.get<User[]>(this.apiUrl).pipe(map(data => this.usersSerializer.fromJson(data)));
	}
	
	getUserById(id: number): Observable<User> {
		const url = this.apiUrl + `/SingleUser/${id}`;
		return this.http.get<User>(url).pipe(map(data => this.userSerializer.fromJson(data)));
	}

	getUsersByDepartmentId(id: number): Observable<User[]> {
		const url = this.apiUrl + `/DepartmentUsers/${id}`;
		return this.http.get<User[]>(url);
	}
}