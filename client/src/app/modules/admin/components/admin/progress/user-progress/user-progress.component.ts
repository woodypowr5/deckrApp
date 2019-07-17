import { Component, OnInit } from '@angular/core';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { ModuleProgress } from 'src/app/shared/types/module-progress';
import { User } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'app-user-progress',
  templateUrl: './user-progress.component.html',
  styleUrls: ['./user-progress.component.scss']
})
export class UserProgressComponent implements OnInit {
	modules: any = Fixtures.moduleProgress;
	users: User[] = Fixtures.users;
	activeUser: User;
	activeUserSettings: ModuleProgress[];

	constructor() {
		this.activeUser = this.users[0];
		this.activeUserSettings = this.modules[this.activeUser.id];
	}

	ngOnInit() {
	}

	setActiveUserSettings(userId: number): void{
		this.activeUserSettings = this.modules[this.activeUser.id];
	}

	userSelected(user: User): void {
		this.activeUser = user;
		this.setActiveUserSettings(user.id);
	}
}
