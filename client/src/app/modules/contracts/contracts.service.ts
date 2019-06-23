import { Injectable } from '@angular/core';
import { Contract } from 'src/app/shared/types/contract.class';
import { BehaviorSubject } from 'rxjs';
import { Fixtures } from 'src/app/shared/data/fixtures';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
	private contracts: Contract[] = [];
	contractChanged: BehaviorSubject<Contract[]> = new BehaviorSubject([]);

  	constructor() {
		// create subscription
		this.contractChanged.subscribe( (contracts: Contract[]) => {
			this.contracts = contracts;
			console.log(this.contracts);
		});
		// actually populate the data from a source
		this.contractChanged.next( Fixtures.contracts );
	}
}
