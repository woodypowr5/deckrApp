import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../types/user.interface';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';


interface AuthUser {
	Email: string;
	Name: string;
	JobRole: string;
	password: string;
	confirmpassword: string;	
};

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.auth.base;
	private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	private options = { headers: this.headers };

	constructor(
		private http: HttpClient
	) { 
		this.test();
	}

	makeAuthUser(user: User): AuthUser {
		return {
			Email: user.email,
			Name: user.name,
			JobRole: user.role,
			password: user.hashedPassword,
			confirmpassword: user.hashedPassword
		}
	}

	registerUser(user: User): Observable<number> {
		const url = this.apiUrl + "/register";
		return this.http.post<number>(url ,JSON.stringify(this.makeAuthUser(user)), this.options);
	}

	test() {
		const newUser: User = {
			id: 1,
			name: 'Chris Woodward',
			email: 'test@test.com',
			hashedPassword: 'a',
			createdAt: new Date(),
			updatedAt: new Date(),
			role: "stuff"
		}

		this.registerUser(newUser).subscribe((id: number) => {
			console.log(id);
		});
	}
}	  