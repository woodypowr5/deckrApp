import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { LoginErrorComponent } from './login-error/login-error.component';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	loginErrorRef: MatDialogRef<LoginErrorComponent>;

	constructor(
		private authService: AuthService,
		public dialog: MatDialog, 
		private overlay: Overlay
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
		} else {
			this.error();
		}
	}

	loginAdmin() {
		this.authService.loginAdmin();
	}

	loginUser() {
		this.authService.loginUser();
	}

	error() {
		this.loginErrorRef = this.dialog.open(LoginErrorComponent, {
			scrollStrategy: this.overlay.scrollStrategies.noop()
		});
		const sub = this.loginErrorRef.componentInstance.closeDialog.subscribe(() => {
			this.dialog.closeAll();
		});
	}
}
