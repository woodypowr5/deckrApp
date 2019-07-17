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
}
