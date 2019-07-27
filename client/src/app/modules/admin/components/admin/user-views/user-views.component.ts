import { Component, OnInit } from '@angular/core';
import { UserSettings } from 'src/app/shared/types/user-settings';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { User } from 'src/app/shared/types/user.interface';
import { UserSettingsService } from 'src/app/shared/services/user-settings.service';

@Component({
  selector: 'app-user-views',
  templateUrl: './user-views.component.html',
  styleUrls: ['./user-views.component.scss']
})
export class UserViewsComponent implements OnInit {
	userSettings: UserSettings[] = [];
	allUsers: User[] = [] 

	constructor(
		private userSettingsService: UserSettingsService
	) { 
		this.userSettings = Fixtures.userSettings;
		this.allUsers = Fixtures.users;
	}

	ngOnInit() {
	}

	updateSettings(settings: UserSettings[]) {
		this.userSettingsService.updateUserSettings(this.userSettings);
	}

}
