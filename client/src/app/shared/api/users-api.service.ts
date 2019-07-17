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
		this.test();
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

	test() {
		// this.getUsers().subscribe((users: User[]) => {
		// 	console.log("getUsers");
		// 	console.log(users);
		// });
		// this.getUserById(0).subscribe((user: User) => {
		// 	console.log("getUserById");
		// 	console.log(user);
		// });
		// this.getUsersByDepartmentId(0).subscribe((users: User[]) => {
		// 	console.log("getUserByDepartmentId");
		// 	console.log(users);
		// });
	}
}	  

// User
// 1)All Users - http://deckrwebapi.azurewebsites.net/api/user
// 2)Get Single User Info - http://deckrwebapi.azurewebsites.net/api/user/SingleUser/1
// 3)Get Department Users Info - http://deckrwebapi.azurewebsites.net/api/user/DepartmentUsers/2
// 4)Register User - http://deckrwebapi.azurewebsites.net/api/user/post?name=name1&emailaddress=emailaddress1&jobrole=jobrole1&password=password1