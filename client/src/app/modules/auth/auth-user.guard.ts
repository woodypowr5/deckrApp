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
export class AuthUserGuard implements CanActivate, CanLoad {
	canLoadUser: boolean = false; 

	constructor(
		private authService: AuthService
	) {
		this.authService.isAuthChanged.subscribe((isAuth: boolean) => {
			this.canLoadUser = isAuth;
		});
	}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canLoadUser
  }

  canLoad(route: Route) {
    return this.canLoadUser;
  }
}  
