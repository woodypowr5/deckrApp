import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
	registerForm: FormGroup;
	constructor() { }
  
	ngOnInit() {
	  this.registerForm = new FormGroup({
		email: new FormControl('', {
		  validators: [Validators.required, Validators.email]
		}),
		password: new FormControl('', { validators: [Validators.required] }),
		repeatPassword: new FormControl('', { validators: [Validators.required] }),
		agree: new FormControl('', { validators: [Validators.required] })
	  });
	}
  
	submitForm() {
		
	}
}
