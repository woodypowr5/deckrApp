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
	this.contractsService.contractsChanged.subscribe( (newContracts: Contract[]) => {
		this.contracts = newContracts;
	});
	this.userSettingsService.userSettingsChanged.subscribe( (settings: UserSettings[]) => {
		this.userSettings = settings[2];
	});
  }
}
