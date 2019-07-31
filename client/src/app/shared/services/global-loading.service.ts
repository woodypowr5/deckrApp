import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoadingService {
	loadingChanged: BehaviorSubject<boolean> = new BehaviorSubject(false);

  	constructor(
	 
	) {

	}	

	isLoading() {
		this.loadingChanged.next(true);
	}

	isFinishedLoading() {
		this.loadingChanged.next(false);
	}
}
