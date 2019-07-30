import { Component, OnInit } from '@angular/core';
import { SecurityGroupsService } from '../../security-groups.service';
import { SecurityGroup } from 'src/app/shared/types/security-group.class';
import { UserSettingsService } from 'src/app/shared/services/user-settings.service';
import { UserSettings } from 'src/app/shared/types/user-settings';

@Component({
  selector: 'app-security-groups',
  templateUrl: './security-groups.component.html',
  styleUrls: ['./security-groups.component.scss']
})
export class SecurityGroupsComponent implements OnInit {
	allGroups: SecurityGroup[] = [];
	approvedGroups: SecurityGroup[] = [];
	deniedGroups: SecurityGroup[] = [];
	pendingGroupNumbers: number[] = [];
	approvedGroupNumbers: number[] = [];
	userSettings: UserSettings;

	constructor(
		private securityGroupsService: SecurityGroupsService,
		private userSettingsService: UserSettingsService
	) { }

	ngOnInit() {
		this.securityGroupsService.allGroupsChanged.subscribe((newSecurityGroups: SecurityGroup[]) => {
			this.allGroups = newSecurityGroups;
		});
		this.securityGroupsService.approvedGroupsChanged.subscribe((newSecurityGroups: SecurityGroup[]) => {
			this.approvedGroups = newSecurityGroups;
			this.deniedGroups = this.allGroups.filter((securityGroup: SecurityGroup) => {
				return this.approvedGroups.filter((approvedGroup: SecurityGroup) => approvedGroup.id === securityGroup.id).length === 0;
			});
		});
		this.userSettingsService.userSettingsChanged.subscribe( (settings: UserSettings[]) => {
			this.userSettings = settings[3];
		});
	}

	raiseAccessRequest(group: SecurityGroup): void {
		this.securityGroupsService.raiseAccessRequest(group);
	}
}
