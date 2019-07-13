import { Component, OnInit } from '@angular/core';
import { UserSettings } from 'src/app/shared/types/user-settings';
import { Fixtures } from 'src/app/shared/data/fixtures';

@Component({
  selector: 'app-user-views',
  templateUrl: './user-views.component.html',
  styleUrls: ['./user-views.component.scss']
})
export class UserViewsComponent implements OnInit {
	private userSettings: UserSettings[] = [];

	constructor() { 
		this.userSettings = Fixtures.userSettings;
	}

	ngOnInit() {
	}

}
