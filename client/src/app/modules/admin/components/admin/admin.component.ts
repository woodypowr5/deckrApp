import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
	  private authService: AuthService
  ) { }

  ngOnInit() {
  }

  navigate() {

  }

  logout() {
	  this.authService.logout();
  }
}
