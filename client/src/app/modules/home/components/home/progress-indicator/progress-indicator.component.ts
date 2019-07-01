import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export abstract class ProgressIndicatorComponent implements OnInit {
	@Input() unitsName: string;
	@Input() unitsCompleted: number;
	@Input() unitsRequired: number;

  	constructor() { }

  	ngOnInit() {
  	}

}
