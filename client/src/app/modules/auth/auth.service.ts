import { Injectable } from '@angular/core';
import { User } from '../../shared/types/user.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { Router } from '@angular/router';
import { UsersApiService } from 'src/app/shared/api/users-api.service';
import { AuthApiService } from 'src/app/shared/api/auth-api.service';
import { JobRolesApiService } from 'src/app/shared/api/job-roles-api.service';
import { JobRole } from 'src/app/shared/types/job-role';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private loggedInUserId: number = 435;
	private loggedInUser: User;
	loggedInUserChanged: BehaviorSubject<User> = new BehaviorSubject(null);
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
		private jwtHelper: JwtHelperService
	) { 
		this.loggedInUserChanged.subscribe((user: User) => {
			this.loggedInUser = user;
			if (user && user !== null){
				this.isAuthChanged.next(true);
			} else {
				this.isAuthChanged.next(false);
				this.isAdminChanged.next(false);
			}	
			this.isAdminChanged.next(this.getIsAdmin());
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
		this.getUsers();
	}

	getUsers() {
		this.usersApi.getUsers().subscribe(data =>{
			console.log(data);
		})
	}

	getLoggedInUser() {
		this.usersApi.getUserById(1).subscribe(data =>{
			console.log(data);
			this.loggedInUserChanged.next(data);
		});
	}

	getJobRoles() {
		this.jobRolesApi.getJobRoles().subscribe((jobRoles: JobRole[]) => {
			this.jobRolesChanged.next(jobRoles);
		})
	}

	loginAdmin() {
		this.loggedInUserChanged.next(Fixtures.adminUser);
		this.router.navigate(["/admin"]);
	}

	loginUser(email: string, password: string): Promise<any> {
		return new Promise<any>((resolve, reject) => {
			this.authApi.authenticate(email, password).subscribe(() => {
				this.getLoggedInUser();
				this.getUsers();
				const url = '/home';
				this.router.navigate([url]);
				resolve(null);
			}, (error) => {
				resolve(error);
			});
		});
	}

	registerUser(newUser: User): Observable<number> {
		console.log(newUser);
		return this.authApi.registerUser(newUser);
	}

	getIsAdmin(): boolean {
		if (!this.loggedInUser || this.loggedInUser === null) {
			return false;
		}
		return this.loggedInUser.isAdmin === true;
	}
	
	logout() {
		localStorage.removeItem('token');
		this.router.navigate([""]);
	}
}
