import { Injectable } from '@angular/core';
import { Training } from 'src/app/shared/types/training.interface';
import { BehaviorSubject } from 'rxjs';
import { TrainingStatus } from 'src/app/shared/types/training-status';
import { HttpClient } from '@angular/common/http';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { TrainingsApiService } from 'src/app/shared/api/trainings-api.service';
import { AuthService } from '../auth/auth.service';
import { User } from 'src/app/shared/types/user.interface';

@Injectable({
	providedIn: 'root'
})
export class TrainingService {
	private url = 'api/trainings';
	private trainings: Training[];
	private loggedInUser: User;
	trainingsChanged: BehaviorSubject<Training[]> = new BehaviorSubject([]); 

  	constructor(
		  private trainingApi: TrainingsApiService,
		  private authService: AuthService
	) { 
		this.trainingsChanged.subscribe( (trainings: Training[]) => {
			this.trainings = trainings;
		});
		this.authService.loggedInUserChanged.subscribe((user: User) => {
			if (user !== null) {
				this.loggedInUser = user;
				this.getTrainingsForUser(user.id);
			}
		});	
	}

	getTrainingsForUser(userId: number): void {
		this.trainingApi.getTrainingsByUserId(userId).subscribe((trainings: Training[]) => {
			this.trainingsChanged.next(trainings);
		});
	}

	completeTraining(training: Training): void {
		this.setTrainingProgress(training, 100);
	}

	setTrainingProgress(training: Training, progress: number): void {
		if (progress == 0) {
			training.status = TrainingStatus.notStarted;
		} else if (progress == 100) {
			training.status = TrainingStatus.complete;
		} else {
			training.status = TrainingStatus.inProgress;
		}
		training.progress = progress;
		this.updateTraining(training);
	}

	updateTraining(training: Training) {
		this.trainingApi.updateTraining(this.loggedInUser.id, training);
	}
}
