import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-error',
  templateUrl: './login-error.component.html',
  styleUrls: ['./login-error.component.scss']
})
export class LoginErrorComponent implements OnInit {
	@Output() closeDialog: EventEmitter<void> = new EventEmitter();

	constructor(
		private router: Router
	) { 
		
	}

	ngOnInit() {

	}

	return() {
		this.closeDialog.emit();
		this.router.navigate(['login']);
	}
}
