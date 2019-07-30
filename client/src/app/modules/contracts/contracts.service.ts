import { Injectable } from '@angular/core';
import { Contract } from 'src/app/shared/types/contract';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Fixtures } from 'src/app/shared/data/fixtures';
import { AuthService } from '../auth/auth.service';
import { User } from 'src/app/shared/types/user.interface';
import { ContractsApiService } from 'src/app/shared/api/contracts-api.service';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {
	private url = 'api/contracts';
	private contracts: Contract[] = [];
	contractsChanged: BehaviorSubject<Contract[]> = new BehaviorSubject([]);

  	constructor(
		private authService: AuthService,
		private contractsApi: ContractsApiService
	) {
		this.contractsChanged.subscribe( (contracts: Contract[]) => {
			this.contracts = contracts;
		});
		this.authService.loggedInUserChanged.subscribe((user: User) => {
			if (user !== null) {
				this.getContractsForUser(user.id);
			}
		});		
	}

	getContractsForUser(userId: number): void {
		this.contractsApi.getContractsByUserId(userId).subscribe((contracts: Contract[]) => {
			this.contractsChanged.next(contracts);
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
