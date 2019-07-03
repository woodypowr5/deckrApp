import { Component, OnInit, Input } from '@angular/core';
import { SecurityGroup } from 'src/app/shared/types/security-group.class';

@Component({
  selector: 'app-security-groups-summary',
  templateUrl: './security-groups-summary.component.html',
  styleUrls: ['./security-groups-summary.component.scss']
})
export class SecurityGroupsSummaryComponent implements OnInit {
	@Input() securityGroups: SecurityGroup[] = [];
	
	constructor() { }

	ngOnInit() {
	}

}
