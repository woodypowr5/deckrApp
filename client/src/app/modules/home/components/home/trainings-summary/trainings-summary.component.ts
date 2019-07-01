import { Component, OnInit, Input } from '@angular/core';
import { Training } from 'src/app/shared/types/training.interface';

@Component({
  selector: 'app-trainings-summary',
  templateUrl: './trainings-summary.component.html',
  styleUrls: ['./trainings-summary.component.scss']
})
export class TrainingsSummaryComponent implements OnInit {
	@Input() trainings: Training[] = [];

	constructor() { }

	get numCompletedTrainings(): number {
        return this.trainings.filter((training: Training) => training.progress === 100).length;
    }

	ngOnInit() {
	}

}
