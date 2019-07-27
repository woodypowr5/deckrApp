import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Training } from 'src/app/shared/types/training.interface';
import { UserSettingsService } from 'src/app/shared/services/user-settings.service';
import { UserSettings } from 'src/app/shared/types/user-settings';

@Component({
  selector: 'app-update-progress',
  templateUrl: './update-progress.component.html',
  styleUrls: ['./update-progress.component.scss']
})
export class UpdateProgressComponent implements OnInit {
	@Output() closeDialog: EventEmitter<number> = new EventEmitter();
	sliderValue: number;
	training: Training;
	userSettings: UserSettings;

	constructor(
		@Inject(MAT_DIALOG_DATA) data,
		private userSettingsService: UserSettingsService
	) { 
		this.training = data;
		this.sliderValue = this.training.progress;
		this.userSettingsService.userSettingsChanged.subscribe( (settings: UserSettings[]) => {
			this.userSettings = settings[0];
		});	
	}

	ngOnInit() {

	}

	confirm() {
		this.closeDialog.emit(this.sliderValue);
	}

}
