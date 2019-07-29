import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanLoad,
  Route,
  Router
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { AuthApiService } from 'src/app/shared/api/auth-api.service';

@Injectable()
export class AuthUserGuard implements CanActivate, CanLoad {
	canLoadUser: boolean = false; 

	constructor(
		private authService: AuthService,
		private authApiService: AuthApiService,
		private router: Router
	) {
		this.authService.isAuthChanged.subscribe((isAuth: boolean) => {
			this.canLoadUser = isAuth;
		});
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		if(this.authApiService.isAuthenticated()) {
			return true;
		}
		this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
		return false;
	}

	canLoad(route: Route) {
		if (this.canLoadUser === false) {
			this.router.navigateByUrl('/login');
		}
		return this.canLoadUser;
	}

	
}  
