import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MustMatch } from './must-match.validator';
import { ErrorStateMatcher, MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Overlay } from '@angular/cdk/overlay';
import { WelcomeComponent } from './welcome/welcome.component';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { User } from 'src/app/shared/types/user.interface';
import { AuthService } from '../../auth.service';
import { DepartmentsService } from 'src/app/shared/services/departments.service';
import { JobRole } from 'src/app/shared/types/job-role';


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
	userId: number;
	registerForm: FormGroup;
	submitted = false;
	matcher = new MyErrorStateMatcher();
	welcomeRef: MatDialogRef<WelcomeComponent>;
	jobRoles: JobRole[] = [];

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		public dialog: MatDialog, 
		private overlay: Overlay,
		private authService: AuthService,
		private departmentsService: DepartmentsService
	) { 
		this.authService.jobRolesChanged.subscribe((jobRoles: JobRole[]) => {
			this.jobRoles = jobRoles;
		})
	}
  
	ngOnInit() {
		this.registerForm = new FormGroup({
			name: new FormControl('', {
				validators: [Validators.required]
			  }),
			email: new FormControl('', {
			  validators: [Validators.required, Validators.email]
			}),
			department: new FormControl('', {
				validators: [Validators.required]
			  }),
			password: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
			confirmPassword: new FormControl('', { validators: [Validators.required, Validators.minLength(6)] }),
			agree: new FormControl('', { validators: [Validators.required] })
		  });
	}

	get f() { return this.registerForm }

	submitForm() {
		this.authService.registerUser({
			name: this.registerForm.controls.name.value,
			email: this.registerForm.controls.name.value,
			role: this.registerForm.controls.name.value,
			hashedPassword: this.registerForm.controls.name.value
		}).subscribe((newUserId: number) => {
			this.userId = newUserId;
		});

		this.welcomeRef = this.dialog.open(WelcomeComponent, {
			data: this.userId,
			scrollStrategy: this.overlay.scrollStrategies.noop()
		});
		const sub = this.welcomeRef.componentInstance.closeDialog.subscribe(() => {
			this.dialog.closeAll();
		});
	}
}
