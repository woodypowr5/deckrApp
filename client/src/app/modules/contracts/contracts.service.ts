import { Injectable } from '@angular/core';
import { Contract } from 'src/app/shared/types/contract';
import { BehaviorSubject, Observable } from 'rxjs';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
	private url = 'api/contracts';
	private contracts: Contract[] = [];
	contractsChanged: BehaviorSubject<Contract[]> = new BehaviorSubject([]);

  	constructor(private http: HttpClient) {
		this.contractsChanged.subscribe( (contracts: Contract[]) => {
			this.contracts = contracts;
		});
		this.contractsChanged.next( 
			Fixtures.contracts 
		);
		this.getContracts();
		
	}

	getContracts() {
		this.http.get(this.url).subscribe( data => {
			console.log(data);
		});
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
