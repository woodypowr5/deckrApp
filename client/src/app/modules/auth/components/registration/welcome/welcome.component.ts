import { Component, OnInit, Input, Output, Inject, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/types/user.interface';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

	@Input() user: User;
	@Output() closeDialog: EventEmitter<void> = new EventEmitter();

	constructor(
		@Inject(MAT_DIALOG_DATA) data,
		private router: Router
	) { 
		this.user = data;
	}


	ngOnInit() {

	}

	continue() {
		this.closeDialog.emit();
		this.router.navigate(['login']);
	}
}
