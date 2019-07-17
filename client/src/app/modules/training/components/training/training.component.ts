import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../../training.service';
import { Training } from 'src/app/shared/types/training.interface';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { MarkCompleteComponent } from './mark-complete/mark-complete.component';
import { UpdateProgressComponent } from './update-progress/update-progress.component';
import { UserSettings } from 'src/app/shared/types/user-settings';
import { UserSettingsService } from 'src/app/shared/services/user-settings.service';

@Component({
	selector: 'app-training',
	templateUrl: './training.component.html',
	styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
	private trainings: Training[] = [];
	markCompleteDialogRef: MatDialogRef<MarkCompleteComponent>;
	updateProgressDialogRef: MatDialogRef<UpdateProgressComponent>;
	private userSettings: UserSettings;
	
  	constructor(
		private trainingService: TrainingService,
		public dialog: MatDialog, 
		private overlay: Overlay,
		private userSettingsService: UserSettingsService
  	) { 
		this.userSettingsService.userSettingsChanged.subscribe( (settings: UserSettings[]) => {
			this.userSettings = settings[0];
		});	
		this.trainingService.trainingsChanged.subscribe( (newTrainings: Training[]) => {
			if (this.userSettings.settings[2].settingValue === 0) {
				this.trainings = newTrainings.filter((training: Training) => training.id !== 6);
			} else {
				this.trainings = newTrainings;
			}	
			
			if (this.userSettings.settings[1].settingValue === 0) {
				this.trainings = newTrainings.filter((training: Training) => training.progress !== 100);
			}
		});	
	}

  	ngOnInit() {
		
	}

	markComplete(training: Training): void {
		this.markCompleteDialogRef = this.dialog.open(MarkCompleteComponent, {
			data: training,
			scrollStrategy: this.overlay.scrollStrategies.noop()
		});
		const sub = this.markCompleteDialogRef.componentInstance.closeDialog.subscribe(() => {
			this.dialog.closeAll();
			this.trainingService.completeTraining(training.id);			
		});
	}

	updateProgress(training): void {
		this.updateProgressDialogRef = this.dialog.open(UpdateProgressComponent, {
			data: training,
			scrollStrategy: this.overlay.scrollStrategies.noop()
		});
		const sub = this.updateProgressDialogRef.componentInstance.closeDialog.subscribe((newProgress: number) => {
			this.dialog.closeAll();
			this.trainingService.setTrainingProgress(training.id, newProgress);			
		});
	}
}
