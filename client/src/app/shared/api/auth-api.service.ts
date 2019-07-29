import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../types/user.interface';
import { ApiUrls } from './api-urls';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwt_decode from "jwt-decode";

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
		private http: HttpClient,
		private jwtHelper: JwtHelperService
	) { 

	}

	getToken() {
		return this.jwtHelper.tokenGetter();
	}

	makeAuthUser(user: User): any {
		return {
			Email: user.email,
			Name: user.name,
			JobRole: user.role,
			password: user.hashedPassword,
			confirmpassword: user.hashedPassword
		}
	}

	registerUser(user: User): Observable<number> {
		const url = this.apiUrl + "/register/";
		return this.http.post<number>(url ,JSON.stringify(this.makeAuthUser(user)), { headers: this.headers });
	}

	authenticate(username: string, password: string): Observable<any> {
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

	getDecodedAccessToken(token: string): any {
		try{
			return jwt_decode(token);
		}
		catch(Error){
			// console.log(Error);
			return undefined;
		}
	}
	
	isAuthenticated(): boolean {
		const token = this.getToken();
		if (token !== null && token !== undefined) {return true};
	}
}	  