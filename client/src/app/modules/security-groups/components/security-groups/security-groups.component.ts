import { Component, OnInit } from '@angular/core';
import { SecurityGroupsService } from '../../security-groups.service';
import { SecurityGroup } from 'src/app/shared/types/security-group.class';

@Component({
  selector: 'app-security-groups',
  templateUrl: './security-groups.component.html',
  styleUrls: ['./security-groups.component.scss']
})
export class SecurityGroupsComponent implements OnInit {
	private securityGroups: SecurityGroup[] = [];

	constructor(
		private securityGroupsService: SecurityGroupsService
	) { }

	ngOnInit() {
		this.securityGroupsService.securityGroupsChanged.subscribe((newSecurityGroups: SecurityGroup[]) => {
			this.securityGroups = newSecurityGroups;
		});
	}
}
