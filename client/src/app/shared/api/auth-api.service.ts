import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../types/user.interface';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
	private apiUrl: string = ApiUrls.base + ApiUrls.auth.base;
	private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	private encodedHeaders = new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'});

	constructor(
		private http: HttpClient
	) { 

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

	registerUser(user: User): Observable<number> {
		const url = this.apiUrl + "/register/";
		return this.http.post<number>(url ,JSON.stringify(this.makeAuthUser(user)), { headers: this.headers });
	}

	loginUser(username: string, password: string): Observable<any> {
		const url = "http://deckrwebapi.azurewebsites.net/token";
		let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
		let body = new URLSearchParams();
		body.set('username', username);
		body.set('password', password);
		body.set('grant_type', "password");
		body.set('client_id', "angular.client");
		body.set('client_secret', "secret");
	  
		return this.http.post<any>(url, body.toString(), {
		  headers: headers
		}).pipe(
		  map(jwt => {
			if (jwt && jwt.access_token) {
			  localStorage.setItem('token', JSON.stringify(jwt))
			}
		  })
		);
	}

	// test() {
	// 	const newUser: User = {
	// 		id: 1,
	// 		name: 'Chris Woodward',
	// 		email: 'test19@test.com',
	// 		hashedPassword: 'asdasd123123!!AA',
	// 		createdAt: new Date(),
	// 		updatedAt: new Date(),
	// 		role: "stuff"
	// 	}

	// 	this.registerUser(newUser).subscribe((id: number) => {
	// 		console.log(id);
	// 		this.loginUser(newUser.email, newUser.hashedPassword).subscribe((token: string) => {
	// 			console.log(token);
	// 		});
	// 	});
	// }
}	  