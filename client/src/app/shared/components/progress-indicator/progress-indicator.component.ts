import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss']
})
export class ProgressIndicatorComponent implements OnInit {
	@Input() complete: number;
	@Input() total: number;
	view: any[] = [200, 200];
	data: any;
	colorScheme = {
		domain: ['#5AA454', '#A10A28', '#C7B42C']
	};

	constructor() { }

	ngOnInit() {
		this.data = [{
			name: "",
			value: this.complete / this.total * 100
		}];
	}

}
