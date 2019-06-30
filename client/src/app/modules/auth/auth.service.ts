import { Injectable } from '@angular/core';
import { User } from './user.class';
import { BehaviorSubject } from 'rxjs';
import { Fixtures } from 'src/app/shared/data/fixtures';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	private loggedInUser: User;
	loggedInUserChanged: BehaviorSubject<User> = new BehaviorSubject(null);

  	constructor() { 
		this.loggedInUserChanged.subscribe((user: User) => {
			this.loggedInUser = user;
		});
		// this.loggedInUserChanged.next(Fixtures.user);
	}
}
