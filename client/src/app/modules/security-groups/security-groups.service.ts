import { Injectable } from '@angular/core';
import { SecurityGroup } from 'src/app/shared/types/security-group.class';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from 'src/app/shared/types/user.interface';
import { SecurityGroupsApiService } from 'src/app/shared/api/security-groups-api.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityGroupsService {
	private loggedInUser: User;
	private allGroups: SecurityGroup[] = [];
	allGroupsChanged: BehaviorSubject<SecurityGroup[]> = new BehaviorSubject([]);
	private deniedGroups: SecurityGroup[] = [];
	deniedGroupsChanged: BehaviorSubject<SecurityGroup[]> = new BehaviorSubject([]);
	private approvedGroups: SecurityGroup[] = [];
	approvedGroupsChanged: BehaviorSubject<SecurityGroup[]> = new BehaviorSubject([]);
	
  	constructor(
		private authService: AuthService,
		private securityGroupsApi: SecurityGroupsApiService
	) { 
		this.allGroupsChanged.subscribe((newSecurityGroups: SecurityGroup[]) => {
			this.allGroups = newSecurityGroups;	
		});
		this.approvedGroupsChanged.subscribe((newApprovedGroups: SecurityGroup[]) => {
			this.approvedGroups = newApprovedGroups;	
		});

		this.authService.loggedInUserChanged.subscribe((user: User) => {
			if (user !== null) {
				this.loggedInUser = user;
				this.getAllGroups();
				
			} else {
				this.loggedInUser = null;
				this.allGroupsChanged.next([]);
				this.approvedGroupsChanged.next([]);
			}
		});			
	}

	getAllGroups(): void {
		this.securityGroupsApi.getSecurityGroups().subscribe((securityGroups: SecurityGroup[]) => {
			this.allGroupsChanged.next(securityGroups);
			this.getUserGroups(this.loggedInUser.id);
		});
	}

	getUserGroups(userId: number): void {
		this.securityGroupsApi.getSecurityGroupsByUserId(userId).subscribe((securityGroups: SecurityGroup[]) => {
			securityGroups.map((group: SecurityGroup) =>{
				group.iconName = this.allGroups.find((modelGroup: SecurityGroup) => modelGroup.id === group.id).iconName;
			});
			this.approvedGroupsChanged.next(securityGroups);
		});		
	}

	raiseAccessRequest(group: SecurityGroup): void {
		group.status = "Pending";
		this.approvedGroupsChanged.next([...this.approvedGroups, group]);
		this.securityGroupsApi.updateSecurityGroup(this.loggedInUser.id, group);
	}
}
