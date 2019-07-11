import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { User } from '../../types/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
	export class HeaderComponent implements OnInit {
	@Output() sidenavToggle = new EventEmitter<void>();
	private activeRoute = 'login';
	private isAuth: boolean;
	private loggedInUser: User = null;

	constructor(private authService: AuthService) {
		this.authService.loggedInUserChanged.subscribe((loggedInUser: User) => {
			this.loggedInUser = loggedInUser;
		});
		this.authService.isAuthChanged.subscribe((isAuth: boolean) => {
			this.isAuth = isAuth;
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