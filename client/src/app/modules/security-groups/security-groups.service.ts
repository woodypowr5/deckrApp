import { Injectable } from '@angular/core';
import { SecurityGroup } from 'src/app/shared/types/security-group.class';
import { BehaviorSubject } from 'rxjs';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { User } from 'src/app/shared/types/user.interface';
import { SecurityGroupsApiService } from 'src/app/shared/api/security-groups-api.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityGroupsService {
	private allGroups: SecurityGroup[] = [];
	allGroupsChanged: BehaviorSubject<SecurityGroup[]> = new BehaviorSubject([]);
	private deniedGroups: SecurityGroup[] = [];
	deniedGroupsChanged: BehaviorSubject<SecurityGroup[]> = new BehaviorSubject([]);
	private approvedGroups: SecurityGroup[] = [];
	approvedGroupsChanged: BehaviorSubject<SecurityGroup[]> = new BehaviorSubject([]);
	private approvedGroupNumbers: number[] = [];
	approvedGroupNumbersChanged: BehaviorSubject<number[]> = new BehaviorSubject([]);
	private pendingGroupNumbers: number[] = [];
	pendingGroupNumbersChanged: BehaviorSubject<number[]> = new BehaviorSubject([]);

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

		this.approvedGroupNumbersChanged.subscribe((approvedGroupNumbers: number[]) => {
			this.approvedGroupNumbers = approvedGroupNumbers; 
			
			this.approvedGroupsChanged.next(this.allGroups.filter((group: SecurityGroup) => 
				approvedGroupNumbers.indexOf(group.id) > -1 || 
				this.pendingGroupNumbers.indexOf(group.id) > -1)
			);
			this.deniedGroupsChanged.next(this.allGroups.filter((group: SecurityGroup) => 
				approvedGroupNumbers.indexOf(group.id) === -1 && 
				this.pendingGroupNumbers.indexOf(group.id) === -1)
			);
		});
		this.pendingGroupNumbersChanged.subscribe((pendingGroupNumbers: number[]) => {
			this.pendingGroupNumbers = pendingGroupNumbers;
			
			this.approvedGroupsChanged.next(this.allGroups.filter((group: SecurityGroup) => 
				this.approvedGroupNumbers.indexOf(group.id) > -1 || 
				pendingGroupNumbers.indexOf(group.id) > -1)
			);
			this.deniedGroupsChanged.next(this.allGroups.filter((group: SecurityGroup) => 
				this.approvedGroupNumbers.indexOf(group.id) === -1 && 
				pendingGroupNumbers.indexOf(group.id) === -1)
			);	
		});

		this.authService.loggedInUserChanged.subscribe((user: User) => {
			if (user !== null) {
				this.getAllGroups();
				this.getUserGroups(user.id);
			}
		});			
	}

	getAllGroups(): void {
		this.securityGroupsApi.getSecurityGroups().subscribe((securityGroups: SecurityGroup[]) => {
			console.log(securityGroups);
			this.allGroupsChanged.next(securityGroups);
		});
	}

	getUserGroups(userId: number): void {
		this.securityGroupsApi.getSecurityGroupsByUserId(userId).subscribe((securityGroups: SecurityGroup[]) => {
			console.log(securityGroups)
			this.approvedGroupsChanged.next(securityGroups);
		});		
	}

	raiseAccessRequest(group: SecurityGroup): void {
		this.pendingGroupNumbersChanged.next([...this.pendingGroupNumbers, group.id]);
	}
}
