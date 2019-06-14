import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  private activeRoute = 'login';
  private isAuth: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuth = false;
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    // this.authService.logout();
  }

  setActiveRoute(route: string) {
    this.activeRoute = route;
  }
}