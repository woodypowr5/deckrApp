import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Training } from 'src/app/shared/types/training.interface';

@Component({
  selector: 'app-mark-complete',
  templateUrl: './mark-complete.component.html',
  styleUrls: ['./mark-complete.component.scss']
})
export class MarkCompleteComponent implements OnInit {
	@Output() closeDialog: EventEmitter<null> = new EventEmitter();
	training: Training;

  	constructor(
		@Inject(MAT_DIALOG_DATA) data
	  ) { 
		this.training = data;
	  }

  	ngOnInit() { }

	confirm(): void {
		this.closeDialog.emit();
	}
}
