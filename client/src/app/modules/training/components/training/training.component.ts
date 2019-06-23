import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../../training.service';
import { Training } from 'src/app/shared/types/training.interface';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { MarkCompleteComponent } from './mark-complete/mark-complete.component';
import { UpdateProgressComponent } from './update-progress/update-progress.component';

@Component({
	selector: 'app-training',
	templateUrl: './training.component.html',
	styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
	private trainings: Training[] = [];
	markCompleteDialogRef: MatDialogRef<MarkCompleteComponent>;
	updateProgressDialogRef: MatDialogRef<UpdateProgressComponent>;
	
  	constructor(
		  private trainingService: TrainingService,
		  public dialog: MatDialog, 
		  private overlay: Overlay
  	) { 
		this.trainingService.trainingsChanged.subscribe( (newTrainings: Training[]) => {
			this.trainings = newTrainings;
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
		const sub = this.updateProgressDialogRef.componentInstance.closeDialog.subscribe(() => {
			this.dialog.closeAll();
		});
	}
}
