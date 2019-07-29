import { Injectable } from '@angular/core';
import { Training } from 'src/app/shared/types/training.interface';
import { BehaviorSubject } from 'rxjs';
import { TrainingStatus } from 'src/app/shared/types/training-status';
import { HttpClient } from '@angular/common/http';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { TrainingsApiService } from 'src/app/shared/api/trainings-api.service';

@Injectable({
	providedIn: 'root'
})
export class TrainingService {
	private url = 'api/trainings';
	private trainings: Training[];
	trainingsChanged: BehaviorSubject<Training[]> = new BehaviorSubject([]); 

  	constructor(
		  private trainingApi: TrainingsApiService
	) { 
		this.trainingsChanged.subscribe( (trainings: Training[]) => {
			this.trainings = trainings;
		});
		this.getTrainings();
		// this.trainingsChanged.next(Fixtures.trainings);
	}

	getTrainings(): void {
		this.trainingApi.getTrainings().subscribe((trainings: Training[]) => {
			console.log(trainings);
			this.trainingsChanged.next(trainings);
		});
	}

	completeTraining(trainingId: number): void {
		let updatedTrainings: Training[] = this.trainings;
		updatedTrainings.map( (training: Training) => {
			if (training.id === trainingId) {
				training.status = TrainingStatus.complete;
				training.progress = 100;
			}
		});
		this.trainingsChanged.next(updatedTrainings);
	}

	setTrainingProgress(trainingId: number, progress: number): void {
		let updatedTrainings: Training[] = this.trainings;
		updatedTrainings.map( (training: Training) => {
			if (training.id === trainingId) {
				if (progress == 0) {
					training.status = TrainingStatus.notStarted;
				} else if (progress == 100) {
					training.status = TrainingStatus.complete;
				} else {
					training.status = TrainingStatus.inProgress;
				}
				training.progress = progress;
			}
		});
		this.trainingsChanged.next(updatedTrainings);
	}
}
