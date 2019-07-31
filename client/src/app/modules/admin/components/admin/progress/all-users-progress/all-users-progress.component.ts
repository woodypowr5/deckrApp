import { Component, OnInit, ViewChild } from '@angular/core';
import { UserProgress } from 'src/app/shared/types/user-progress';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { MatSort, MatTableDataSource } from '@angular/material';
import { AdminHomeApiService } from 'src/app/shared/api/admin-home-api.service';

@Component({
  selector: 'app-all-users-progress',
  templateUrl: './all-users-progress.component.html',
  styleUrls: ['./all-users-progress.component.scss']
})
export class AllUsersProgressComponent implements OnInit {
	users: UserProgress[];
	activeUser: UserProgress;
	displayedColumns: string[] = ['employeeID', 'name', 'completedTime', 'totalTime', 'percentComplete'];
	dataSource: any;
  
	@ViewChild(MatSort, {static: true}) sort: MatSort;
  
	constructor(
		private adminHomeApi: AdminHomeApiService
	) {
		this.users = this.addPercentComplete(Fixtures.userProgress);
		if (this.users.length > 0) {
			this.activeUser = this.users[0];
		}
	}

	ngOnInit() {
		this.getAllUsersProgress();
	}

	addPercentComplete(userProgress: UserProgress[]) {
		userProgress.map((user: UserProgress) => {
			user.percentComplete = user.completedTime / user.totalTime;
		});
		return userProgress;
	}

	setActiveUser(user: UserProgress) {
		this.activeUser = user;
	}

	getAllUsersProgress() {
		this.adminHomeApi.getAllUsersProgress().subscribe((allUsersProgress: UserProgress[]) => {
			this.dataSource = new MatTableDataSource(allUsersProgress);
			this.dataSource.sort = this.sort;
		});
	}
}
