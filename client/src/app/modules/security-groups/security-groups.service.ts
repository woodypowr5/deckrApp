import { Injectable } from '@angular/core';
import { SecurityGroup } from 'src/app/shared/types/security-group.class';
import { BehaviorSubject } from 'rxjs';
import { Fixtures } from 'src/app/shared/data/fixtures';

@Injectable({
  providedIn: 'root'
})
export class SecurityGroupsService {
	private allGroups: SecurityGroup[] = [];
	allGroupsChanged: BehaviorSubject<SecurityGroup[]> = new BehaviorSubject([]);
	private approvedGroups: SecurityGroup[] = [];
	approvedGroupsChanged: BehaviorSubject<SecurityGroup[]> = new BehaviorSubject([]);
	private approvedGroupNumbers: number[] = [];
	approvedGroupNumbersChanged: BehaviorSubject<number[]> = new BehaviorSubject([]);

  	constructor() { 
		this.allGroupsChanged.subscribe((newSecurityGroups: SecurityGroup[]) => {
			this.allGroups = newSecurityGroups;	
		});
		this.approvedGroupNumbersChanged.subscribe((approvedGroupNumbers: number[]) => {
			this.approvedGroupNumbers = approvedGroupNumbers;
			const allGroups = this.allGroups;
			this.allGroupsChanged.next(allGroups.filter((group: SecurityGroup) => approvedGroupNumbers.indexOf(group.id) === -1));
			this.approvedGroupsChanged.next(allGroups.filter((group: SecurityGroup) => approvedGroupNumbers.indexOf(group.id) > -1));
		});
		this.approvedGroupsChanged.subscribe((newApprovedGroups: SecurityGroup[]) => {
			this.approvedGroups = newApprovedGroups;	
		});
		this.allGroupsChanged.next(Fixtures.securityGroups);
		this.approvedGroupNumbersChanged.next(Fixtures.approvedSecurityGroups);		
	}
}
