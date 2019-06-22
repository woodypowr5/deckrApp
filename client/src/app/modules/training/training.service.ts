import { Injectable } from '@angular/core';
import { Training } from 'src/app/shared/types/training.class';
import { BehaviorSubject } from 'rxjs';
import { Fixtures } from 'src/app/shared/data/fixtures';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
	private trainings: Training[];
	trainingsChanged: BehaviorSubject<Training[]> = new BehaviorSubject([]); 

  	constructor() { 
		this.trainingsChanged.subscribe( (trainings: Training[]) => {
			this.trainings = trainings;
			console.log(this.trainings);
		});
		this.trainingsChanged.next(Fixtures.trainings);
	}
}
