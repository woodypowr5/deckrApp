import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { SecurityGroup } from 'src/app/shared/types/security-group.class';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-access-request',
  templateUrl: './access-request.component.html',
  styleUrls: ['./access-request.component.scss']
})
export class AccessRequestComponent implements OnInit {
	@Output() closeDialog: EventEmitter<void> = new EventEmitter();
	securityGroup: SecurityGroup;

	constructor(
		@Inject(MAT_DIALOG_DATA) data
	) { 
		this.securityGroup = data;
	}

 	ngOnInit() {

	}

  	confirm() {
		this.closeDialog.emit();
	}	

}
