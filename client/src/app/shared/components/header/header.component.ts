import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { User } from '../../types/user.interface';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
	export class HeaderComponent implements OnInit {
	@Output() sidenavToggle = new EventEmitter<void>();
	private activeRoute = 'login';
	private isAuth: boolean = false;
	private isAdmin: boolean = false;
	private loggedInUser: User = null;

	constructor(
		private authService: AuthService,
		private router: Router
	) {
		this.authService.loggedInUserChanged.subscribe((loggedInUser: User) => {
			this.loggedInUser = loggedInUser;
		});
		this.authService.isAuthChanged.subscribe((isAuth: boolean) => {
			this.isAuth = isAuth;
		});
		this.authService.isAdminChanged.subscribe((isAdmin: boolean) => {
			this.isAdmin = isAdmin;
		});
		router.events.subscribe((val) => {
			if (val instanceof NavigationEnd) {
				this.setActiveRoute(val.url);
			}
		});
	}

	ngOnInit() {
		this.isAuth = false;
	}

	onToggleSidenav() {
		this.sidenavToggle.emit();
	}

	logout() {
		this.authService.logout();
	}

	setActiveRoute(route: string) {
		this.activeRoute = route;
	}
}