import { Injectable } from '@angular/core';
import { User } from '../../shared/types/user.interface';
import { BehaviorSubject } from 'rxjs';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private loggedInUser: User;
	loggedInUserChanged: BehaviorSubject<User> = new BehaviorSubject(null);

  	constructor(
		  private router: Router
	  ) { 
		this.loggedInUserChanged.subscribe((user: User) => {
			this.loggedInUser = user;
		});
		// this.loggedInUserChanged.next(Fixtures.user);
	}

	loginAdmin() {
		this.loggedInUserChanged.next(Fixtures.adminUser);
		this.router.navigate(["admin"]);
	}

	loginUser() {
		this.loggedInUserChanged.next(Fixtures.user);
		this.router.navigate(["home"]);
	}
}
