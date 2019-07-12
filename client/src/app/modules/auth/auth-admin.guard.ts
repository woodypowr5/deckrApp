import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	CanLoad,
	Route
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthAdminGuard implements CanActivate, CanLoad {
	canLoadAdmin: boolean = false; 

	constructor(
		private authService: AuthService
	) {
		this.authService.isAdminChanged.subscribe((isAdmin: boolean) => {
			console.log(isAdmin);
			this.canLoadAdmin = isAdmin;
		});
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return false;
	}

	canLoad(route: Route) {
		return false;
	}
}  
