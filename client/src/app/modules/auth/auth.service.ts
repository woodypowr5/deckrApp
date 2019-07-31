import { Injectable } from '@angular/core';
import { User } from '../../shared/types/user.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { UsersApiService } from 'src/app/shared/api/users-api.service';
import { AuthApiService } from 'src/app/shared/api/auth-api.service';
import { JobRolesApiService } from 'src/app/shared/api/job-roles-api.service';
import { JobRole } from 'src/app/shared/types/job-role';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwt_decode from "jwt-decode";
import { ApiUrls } from 'src/app/shared/api/api-urls';
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
export class AuthService {
	private apiUrl: string = ApiUrls.base + ApiUrls.auth.base;
	private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
	private encodedHeaders = new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'});
	private loggedInUser: User;
	loggedInUserChanged: BehaviorSubject<User> = new BehaviorSubject(null);
	private users: User[];
	usersChanged: BehaviorSubject<User[]> = new BehaviorSubject(null);
	private isAuth: boolean = false;
	isAuthChanged: BehaviorSubject<boolean> = new BehaviorSubject(false);
	private isAdmin: boolean = false;
	isAdminChanged: BehaviorSubject<boolean> = new BehaviorSubject(false);
	private jobRoles: JobRole[];
	jobRolesChanged: BehaviorSubject<JobRole[]> = new BehaviorSubject([]);

  	constructor(
		private router: Router,
		private usersApi: UsersApiService,
		private authApi: AuthApiService,
		private jobRolesApi: JobRolesApiService,
		private http: HttpClient,
		private jwtHelper: JwtHelperService,
	) { 
		this.loggedInUserChanged.subscribe((user: User) => {
			this.loggedInUser = user;
		});
		this.isAuthChanged.subscribe( (newIsAuth: boolean) => {
			this.isAuth = newIsAuth;
		});
		this.isAdminChanged.subscribe( (newIsAdmin: boolean) => {
			this.isAdmin = newIsAdmin;
		});
		this.jobRolesChanged.subscribe( (newJobRoles: JobRole[]) => {
			this.jobRoles = newJobRoles;
		});
		this.getJobRoles();
		this.authApi.loggedInUserChanged.subscribe((user: User) => {
			this.loggedInUserChanged.next(user);
		});
		this.getLoggedInUser();
	}

	getUsers() {
		this.usersApi.getUsers().subscribe(data => {
			this.usersChanged.next(this.users = data);
		})
	}

	getLoggedInUser(): void {
		const token = this.authApi.getToken();
		if (token) {
			const parts = token.split(",");
			const idPart = parts[4].replace(/['"]+/g, '');
			const id = idPart.split(":")[1];
			this.usersApi.getUserById(parseInt(id)).subscribe((user: User) =>{		
				if (user && user !== null){
					if (user.id === 284) {
						this.router.navigate(["admin"]);
						this.isAuthChanged.next(true);
						this.isAdminChanged.next(true);
					} else {
						this.router.navigate(["home"]);
						this.isAuthChanged.next(true);
						this.isAdminChanged.next(false);
					}		
				} else {
					this.isAuthChanged.next(false);
					this.isAdminChanged.next(false);
				}	
				this.loggedInUserChanged.next(user);
			});
		}
	}

	getJobRoles() {
		this.jobRolesApi.getJobRoles().subscribe((jobRoles: JobRole[]) => {
			this.jobRolesChanged.next(jobRoles);
		})
	}

	loginUser(email: string, password: string): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			this.authApi.authenticate(email, password).subscribe(() => {
				this.getLoggedInUser();
				this.router.navigate(["/home"]);
				resolve(null);
			}, (error) => {
				resolve(error);
			});
		});
	}
	
	logout() {
		this.isAuthChanged.next(false);
		this.loggedInUserChanged.next(null);
		localStorage.removeItem('token');
		this.router.navigate(["login"]);
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
			return undefined;
		}
	}
	
	isAuthenticated(): boolean {
		const token = this.getToken();
		if (token !== null && token !== undefined) {return true};
	}
}
