import { Injectable } from '@angular/core';
import { SecurityGroup } from 'src/app/shared/types/security-group.class';
import { BehaviorSubject } from 'rxjs';
import { Fixtures } from 'src/app/shared/data/fixtures';

@Injectable({
  providedIn: 'root'
})
export class SecurityGroupsService {
	private securityGroups: SecurityGroup[] = [];
	securityGroupsChanged: BehaviorSubject<SecurityGroup[]> = new BehaviorSubject([]);

  	constructor() { 
		this.securityGroupsChanged.subscribe((newSecurityGroups: SecurityGroup[]) => {
			this.securityGroups = newSecurityGroups;
		});
		this.securityGroupsChanged.next(Fixtures.securityGroups);
	}
}
