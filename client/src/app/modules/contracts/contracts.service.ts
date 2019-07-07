import { Injectable } from '@angular/core';
import { Contract } from 'src/app/shared/types/contract';
import { BehaviorSubject } from 'rxjs';
import { Fixtures } from 'src/app/shared/data/fixtures';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
	private contracts: Contract[] = [];
	contractsChanged: BehaviorSubject<Contract[]> = new BehaviorSubject([]);

  	constructor() {
		this.contractsChanged.subscribe( (contracts: Contract[]) => {
			this.contracts = contracts;
		});
		this.contractsChanged.next( Fixtures.contracts );
	}

	signContract(contract: Contract) {
		const contracts: Contract[] = this.contracts;
		this.contracts.map((currentContract: Contract) => {
			if (currentContract.id === contract.id) {
				currentContract.signed = true;
			}
		});
		this.contractsChanged.next(contracts);
	}
}
