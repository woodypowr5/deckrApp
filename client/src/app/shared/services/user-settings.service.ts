import { Injectable } from '@angular/core';
import { UserSettings } from '../types/user-settings';
import { BehaviorSubject } from 'rxjs';
import { Fixtures } from '../data/fixtures';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService  {
	private userSettings: UserSettings[];
	userSettingsChanged:  BehaviorSubject<UserSettings[]> = new BehaviorSubject(null); 

	constructor() {
		this.userSettingsChanged.subscribe( (settings: UserSettings[]) => {
			this.userSettings = settings;
		});
		this.userSettingsChanged.next(Fixtures.userSettings);
	}

	updateUserSettings(newSettings: UserSettings[]): void {
		console.log(newSettings)
		// newSettings.map(module => {
		// 	module.settings.map(setting => {
		// 		if (setting.settingValue === true) {
		// 			setting.settingValue = 1;
		// 		} else {
		// 			setting.settingValue = 0;s
		// 		}
		// 	});
		// });
		this.userSettingsChanged.next(newSettings);
	}
}
