import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-progress',
  templateUrl: './update-progress.component.html',
  styleUrls: ['./update-progress.component.scss']
})
export class UpdateProgressComponent implements OnInit {
	@Output() closeDialog: EventEmitter<null> = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

}
