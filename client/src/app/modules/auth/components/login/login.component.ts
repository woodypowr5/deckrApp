import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
	  private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  submitForm() {
	  const email = this.loginForm.value.email;
	  const password = this.loginForm.value.password;
	  if (email === 'test@deckr.com') {
		this.loginUser();
	  } else if (email === 'admin@deckr.com') {
		this.loginAdmin();
	  }
  }

  loginAdmin() {
	this.authService.loginAdmin();
  }

  loginUser() {
	this.authService.loginUser();
  }
}
