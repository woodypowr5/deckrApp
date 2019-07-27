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

interface AuthLoginRequest {
	Grant_type: string,
	Username: string,
	Password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
	private apiUrl: string = ApiUrls.base + ApiUrls.auth;
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
			JobRole: user.role, // what are valid roles?
			password: user.hashedPassword,
			confirmpassword: user.hashedPassword
		}
	}

	makeLoginRequest(email: string, password: string): AuthLoginRequest {
		return {
			Grant_type: "?", // what's a valid grant var?
			Username: email,
			Password: password
		}
	}

	registerUser(user: User): Observable<number> {
		const url = this.apiUrl + "/register";
		return this.http.post<number>(url ,JSON.stringify(this.makeAuthUser(user)), this.options);
	}

	loginUser(email: string, password: string): Observable<string> {
		const url = this.apiUrl + "/token";
		return this.http.post<string>(url ,JSON.stringify(this.makeLoginRequest(email, password)), this.options);
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
			this.loginUser(newUser.email, newUser.hashedPassword).subscribe((token: string) => {
				console.log(token);
			});
		});
	}
}	  