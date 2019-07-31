import { Component, OnInit } from '@angular/core';
import { GlobalLoadingService } from '../../services/global-loading.service';

@Component({
  selector: 'app-global-loading',
  templateUrl: './global-loading.component.html',
  styleUrls: ['./global-loading.component.scss']
})
export class GlobalLoadingComponent implements OnInit {
	loading = false;

	constructor(
		private loadingService: GlobalLoadingService
	) { 
		this.loadingService.loadingChanged.subscribe(loading => {
			this.loading = loading;
		});
	}

	ngOnInit() {
	}
}
