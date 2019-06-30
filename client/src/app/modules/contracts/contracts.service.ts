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
		this.contractChanged.subscribe( (contracts: Contract[]) => {
			this.contracts = contracts;
		});
		this.contractChanged.next( Fixtures.contracts );
	}
}
