import { Injectable } from '@angular/core';
import { Training } from 'src/app/shared/types/training.interface';
import { BehaviorSubject } from 'rxjs';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { TrainingStatus } from 'src/app/shared/types/training-status';

@Injectable({
	providedIn: 'root'
})
export class TrainingService {
	private trainings: Training[];
	trainingsChanged: BehaviorSubject<Training[]> = new BehaviorSubject([]); 

  	constructor() { 
		this.trainingsChanged.subscribe( (trainings: Training[]) => {
			this.trainings = trainings;
		});
		this.trainingsChanged.next(Fixtures.trainings);
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
