import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { User } from '../../types/user.interface';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
	@Output() closeSidenav = new EventEmitter<void>();
	private activeRoute = 'login';
	private isAuth: boolean = false;
	private isAdmin: boolean = false;
	private loggedInUser: User = null;

	constructor(private authService: AuthService) {
		this.authService.loggedInUserChanged.subscribe((loggedInUser: User) => {
			this.loggedInUser = loggedInUser;
		});
		this.authService.isAuthChanged.subscribe((isAuth: boolean) => {
			this.isAuth = isAuth;
		});
		this.authService.isAdminChanged.subscribe((isAdmin: boolean) => {
			this.isAdmin = isAdmin;
		});
	}

	ngOnInit() {
		this.isAuth = false;
	}

	logout() {
		this.authService.logout();
	}

	setActiveRoute(route: string) {
		this.activeRoute = route;
	}

	close() {
		this.closeSidenav.emit();
	}
}
