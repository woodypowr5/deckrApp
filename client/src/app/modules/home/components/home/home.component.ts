import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/auth.service';
import { TrainingService } from 'src/app/modules/training/training.service';
import { SecurityGroupsService } from 'src/app/modules/security-groups/security-groups.service';
import { ContractsService } from 'src/app/modules/contracts/contracts.service';
import { User } from 'src/app/shared/types/user.interface';
import { SecurityGroup } from 'src/app/shared/types/security-group.class';
import { Contract } from 'src/app/shared/types/contract';
import { Training } from 'src/app/shared/types/training.interface';
import { UserSettings } from 'src/app/shared/types/user-settings';
import { UserSettingsService } from 'src/app/shared/services/user-settings.service';

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
	private userSettings: UserSettings;
	private allUserSettings: any;


	constructor(
		private authService: AuthService,
		private trainingService: TrainingService,
		private securityGroupsService: SecurityGroupsService,
		private contractsService: ContractsService,
		private userSettingsService: UserSettingsService
	) { }

	ngOnInit() {
		this.authService.loggedInUserChanged.subscribe((user: User) => {
			this.user = user;
		});
		this.userSettingsService.userSettingsChanged.subscribe( (settings: UserSettings[]) => {
			this.userSettings = settings[1];
			this.allUserSettings = settings;
		});	
		this.trainingService.trainingsChanged.subscribe((trainings: Training[]) => {
			this.trainings = trainings;

			if (this.allUserSettings[0].settings[2].settingValue !== true) {
				this.trainings = this.trainings.filter((training: Training) => training.id !== 6);
			} 
		});
		this.securityGroupsService.approvedGroupsChanged.subscribe((securityGroups: SecurityGroup[]) => {
			this.securityGroups = securityGroups;
		});
		this.contractsService.contractsChanged.subscribe((contracts: Contract[]) => {
			this.contracts = contracts;

			if (this.allUserSettings[2].settings[0].settingValue === false) {
				this.contracts = this.contracts.filter((contract: Contract) => contract.id !== 1);
			}	
			if (this.allUserSettings[2].settings[1].settingValue === false) {
				this.contracts = this.contracts.filter((contract: Contract) => contract.id !== 2);
			}	
			if (this.allUserSettings[2].settings[2].settingValue === false) {
				this.contracts = this.contracts.filter((contract: Contract) => contract.id !== 3);
			}	
			if (this.allUserSettings[2].settings[3].settingValue === false) {
				this.contracts = this.contracts.filter((contract: Contract) => contract.id !== 4);
			}	
			if (this.allUserSettings[2].settings[4].settingValue === false) {
				this.contracts = this.contracts.filter((contract: Contract) => contract.id !== 5);
			}	
		});
		

		
	}

	logout(): void {
		this.authService.logout();
	}
}
