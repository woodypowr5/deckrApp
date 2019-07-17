import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MustMatch } from './must-match.validator';
import { ErrorStateMatcher, MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';
import { WelcomeComponent } from './welcome/welcome.component';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { User } from 'src/app/shared/types/user.interface';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
	user: User
	registerForm: FormGroup;
	submitted = false;
	matcher = new MyErrorStateMatcher();
	welcomeRef: MatDialogRef<WelcomeComponent>;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		public dialog: MatDialog, 
		private overlay: Overlay
	) { }
  
	ngOnInit() {
		// this.registerForm = this.formBuilder.group({
		// 	name: ['', Validators.required],
		// 	email: ['', [Validators.required, Validators.email]],
		// 	password: ['', [Validators.required, Validators.minLength(6)]],
		// 	confirmPassword: ['', Validators.required],
		// 	agree: ['', Validators.required]
		// }, {
		// 	validator: MustMatch('password', 'confirmPassword'),
		// });

		this.registerForm = new FormGroup({
			name: new FormControl('', {
				validators: [Validators.required]
			  }),
			email: new FormControl('', {
			  validators: [Validators.required, Validators.email]
			}),
			password: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
			confirmPassword: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
			agree: new FormControl('', { validators: [Validators.required] }),
			
		  });
	}

	get f() { return this.registerForm }
  
	submitForm() {
		this.user = Fixtures.user;
		this.welcomeRef = this.dialog.open(WelcomeComponent, {
			data: this.user,
			scrollStrategy: this.overlay.scrollStrategies.noop()
		});
		const sub = this.welcomeRef.componentInstance.closeDialog.subscribe(() => {
			this.dialog.closeAll();
		});
	}
}
