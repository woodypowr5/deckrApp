import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { TrainingService } from 'src/app/modules/training/training.service';
import { SecurityGroupsService } from 'src/app/modules/security-groups/security-groups.service';
import { ContractsService } from 'src/app/modules/contracts/contracts.service';
import { User } from 'src/app/shared/types/user.interface';
import { SecurityGroup } from 'src/app/shared/types/security-group.class';
import { Contract } from 'src/app/shared/types/contract';
import { Training } from 'src/app/shared/types/training.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	private user: User;
	private securityGroups: SecurityGroup[] = [];
	private contracts: Contract[] = [];
	private trainings: Training[] = [];

	constructor(
		private authService: AuthService,
		private trainingService: TrainingService,
		private securityGroupsService: SecurityGroupsService,
		private contractsService: ContractsService
	) { }

	ngOnInit() {
		this.authService.loggedInUserChanged.subscribe((user: User) => {
			this.user = user;
		});
		this.trainingService.trainingsChanged.subscribe((trainings: Training[]) => {
			this.trainings = trainings;
		});
		this.securityGroupsService.approvedGroupsChanged.subscribe((securityGroups: SecurityGroup[]) => {
			this.securityGroups = securityGroups;
		});
		this.contractsService.contractsChanged.subscribe((contracts: Contract[]) => {
			this.contracts = contracts;
		});
	}

	logout(): void {
		this.authService.logout();
	}
}
