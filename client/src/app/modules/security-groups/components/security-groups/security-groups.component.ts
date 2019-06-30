import { Component, OnInit } from '@angular/core';
import { SecurityGroupsService } from '../../security-groups.service';
import { SecurityGroup } from 'src/app/shared/types/security-group.class';

@Component({
  selector: 'app-security-groups',
  templateUrl: './security-groups.component.html',
  styleUrls: ['./security-groups.component.scss']
})
export class SecurityGroupsComponent implements OnInit {
	private approvedGroups: SecurityGroup[] = [];
	private deniedGroups: SecurityGroup[] = [];
	private pendingGroupNumbers: number[] = [];

	constructor(
		private securityGroupsService: SecurityGroupsService
	) { }

	ngOnInit() {
		this.securityGroupsService.deniedGroupsChanged.subscribe((newSecurityGroups: SecurityGroup[]) => {
			this.deniedGroups = newSecurityGroups;
		});
		this.securityGroupsService.approvedGroupsChanged.subscribe((newSecurityGroups: SecurityGroup[]) => {
			this.approvedGroups = newSecurityGroups;
		});
		this.securityGroupsService.pendingGroupNumbersChanged.subscribe((groupNumbers: number[]) => {
			this.pendingGroupNumbers = groupNumbers;
		});
	}

	raiseAccessRequest(group: SecurityGroup): void {
		this.securityGroupsService.raiseAccessRequest(group);
	}
}
