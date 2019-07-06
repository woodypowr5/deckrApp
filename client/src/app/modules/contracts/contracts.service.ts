import { Injectable } from '@angular/core';
import { Contract } from 'src/app/shared/types/contract.class';
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
		const contracts: Contract = this.contracts.find((currentContract: Contract) =>  currentContract.id === contract.id);
		this.contractsChanged.next(contracts);
	}
}
