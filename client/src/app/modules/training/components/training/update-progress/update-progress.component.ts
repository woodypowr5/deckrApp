import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Training } from 'src/app/shared/types/training.interface';

@Component({
  selector: 'app-update-progress',
  templateUrl: './update-progress.component.html',
  styleUrls: ['./update-progress.component.scss']
})
export class UpdateProgressComponent implements OnInit {
	@Output() closeDialog: EventEmitter<number> = new EventEmitter();
	sliderValue: number;
	training: Training;

	constructor(
		@Inject(MAT_DIALOG_DATA) data
	) { 
		this.training = data;
		this.sliderValue = this.training.progress;
	}

	ngOnInit() {

	}

	confirm() {
		this.closeDialog.emit(this.sliderValue);
	}

}
