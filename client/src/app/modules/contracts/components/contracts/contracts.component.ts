import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../../contracts.service';
import { Contract } from 'src/app/shared/types/contract';
import { UserSettings } from 'src/app/shared/types/user-settings';
import { UserSettingsService } from 'src/app/shared/services/user-settings.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {
	private contracts: Contract[] = [];
	private userSettings: UserSettings;

  constructor(
	  private contractsService: ContractsService,
	  private userSettingsService: UserSettingsService
  ) { }

  ngOnInit() {
	this.userSettingsService.userSettingsChanged.subscribe( (settings: UserSettings[]) => {
		this.userSettings = settings[2];
	});
	this.contractsService.contractsChanged.subscribe( (newContracts: Contract[]) => {
		this.contracts = newContracts;
		if (this.userSettings.settings[0].settingValue === false) {
			this.contracts = this.contracts.filter((contract: Contract) => contract.id !== 1);
		}	
		if (this.userSettings.settings[1].settingValue === false) {
			this.contracts = this.contracts.filter((contract: Contract) => contract.id !== 2);
		}	
		if (this.userSettings.settings[2].settingValue === false) {
			this.contracts = this.contracts.filter((contract: Contract) => contract.id !== 3);
		}	
		if (this.userSettings.settings[3].settingValue === false) {
			this.contracts = this.contracts.filter((contract: Contract) => contract.id !== 4);
		}	
		if (this.userSettings.settings[4].settingValue === false) {
			this.contracts = this.contracts.filter((contract: Contract) => contract.id !== 5);
		}	
	});
  }
}
