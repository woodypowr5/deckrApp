import { Component, OnInit } from '@angular/core';
import { SecurityGroupsService } from '../../security-groups.service';
import { SecurityGroup } from 'src/app/shared/types/security-group.class';

@Component({
  selector: 'app-security-groups',
  templateUrl: './security-groups.component.html',
  styleUrls: ['./security-groups.component.scss']
})
export class SecurityGroupsComponent implements OnInit {
	private allGroups: SecurityGroup[] = [];
	private approvedGroups: SecurityGroup[] = [];

	constructor(
		private securityGroupsService: SecurityGroupsService
	) { }

	ngOnInit() {
		this.securityGroupsService.allGroupsChanged.subscribe((newSecurityGroups: SecurityGroup[]) => {
			this.allGroups = newSecurityGroups;
		});
		this.securityGroupsService.approvedGroupsChanged.subscribe((newSecurityGroups: SecurityGroup[]) => {
			this.approvedGroups = newSecurityGroups;
		});
	}
}
