import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SecurityGroup } from 'src/app/shared/types/security-group.class';

@Component({
  selector: 'app-security-group',
  templateUrl: './security-group.component.html',
  styleUrls: ['./security-group.component.scss']
})
export class SecurityGroupComponent implements OnInit {
	@Input() pending: boolean;
	@Input() approved: boolean;
	@Input() securityGroup: SecurityGroup;
	@Output() accessRequestRaised: EventEmitter<void> = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	raiseAccessRequest() {
		this.accessRequestRaised.emit();
	}

}
