import { Component, OnInit } from '@angular/core';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { ModuleProgress } from 'src/app/shared/types/module-progress';
import { User } from 'src/app/shared/types/user.interface';
import { BehaviorSubject } from 'rxjs';
import { ModulesApiService } from 'src/app/shared/api/modules-api.service';
import { AdminHomeApiService } from 'src/app/shared/api/admin-home-api.service';

@Component({
  selector: 'app-user-progress',
  templateUrl: './user-progress.component.html',
  styleUrls: ['./user-progress.component.scss']
})
export class UserProgressComponent implements OnInit {
	private modules: any = [];
	modulesChanged: BehaviorSubject<any> = new BehaviorSubject(null);

	users: User[] = Fixtures.users;
	activeUser: User;
	activeUserSettings: ModuleProgress[];

	constructor(
		private modulesApi: ModulesApiService,
		private adminHomeApi: AdminHomeApiService
	) {
		this.activeUser = this.users[0];
		this.activeUserSettings = this.modules[this.activeUser.id];
		this.getModules();
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

	getModules() {
		// this.modulesApi.getModules().subscribe(modules => {
		// 	console.log(modules);
		// });
	}
}
