import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SecurityGroup } from 'src/app/shared/types/security-group.class';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { AccessRequestComponent } from './access-request/access-request.component';
import { SecurityGroupsService } from '../../../security-groups.service';

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
	accessRequestDialogRef: MatDialogRef<AccessRequestComponent>;

	constructor(
		public dialog: MatDialog, 
		private overlay: Overlay,
		private securityGroupsService: SecurityGroupsService
	) { }

	ngOnInit() {
	}

	raiseAccessRequest() {
		this.accessRequestDialogRef = this.dialog.open(AccessRequestComponent, {
			data: this.securityGroup,
			scrollStrategy: this.overlay.scrollStrategies.noop()
		});
		const sub = this.accessRequestDialogRef.componentInstance.closeDialog.subscribe(() => {
			this.dialog.closeAll();
			this.securityGroupsService.raiseAccessRequest(this.securityGroup);
		});
	}
}
