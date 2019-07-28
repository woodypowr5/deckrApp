import { Injectable } from '@angular/core';
import { User } from '../../shared/types/user.interface';
import { BehaviorSubject } from 'rxjs';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { Router } from '@angular/router';
import { UsersApiService } from 'src/app/shared/api/users-api.service';
import { AuthApiService } from 'src/app/shared/api/auth-api.service';
import { JobRolesApiService } from 'src/app/shared/api/job-roles-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private loggedInUser: User;
	loggedInUserChanged: BehaviorSubject<User> = new BehaviorSubject(null);
	private isAuth: boolean = false;
	isAuthChanged: BehaviorSubject<boolean> = new BehaviorSubject(false);
	private isAdmin: boolean = false;
	isAdminChanged: BehaviorSubject<boolean> = new BehaviorSubject(false);
	private jobRoles: string[];
	jobRolesChanged: BehaviorSubject<string[]> = new BehaviorSubject([]);

  	constructor(
		  private router: Router,
		  private usersApi: UsersApiService,
		  private authApi: AuthApiService,
		  private jobRolesApi: JobRolesApiService
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
		this.jobRolesChanged.subscribe( (newJobRoles: string[]) => {
			this.jobRoles = newJobRoles;
		});
		this.getJobRoles();
	}

	getUsers() {
		this.usersApi.getUsers().subscribe(data =>{
			console.log(data);
		})
	}

	getJobRoles() {
		this.jobRolesApi.getJobRoles().subscribe(data =>{
			this.jobRoles = this.jobRoles;
		})
	}

	loginAdmin() {
		this.loggedInUserChanged.next(Fixtures.adminUser);
		this.router.navigate(["/admin"]);
	}

	loginUser() {
		this.loggedInUserChanged.next(Fixtures.user);
		this.router.navigate(["home"]);
	}

	getIsAdmin(): boolean {
		if (!this.loggedInUser || this.loggedInUser === null) {
			return false;
		}
		return this.loggedInUser.isAdmin === true;
	}

	logout() {
		this.loggedInUserChanged.next(null);
		this.router.navigate([""]);
	}
}
