import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/types/contract';

@Component({
  selector: 'app-contracts-summary',
  templateUrl: './contracts-summary.component.html',
  styleUrls: ['./contracts-summary.component.scss']
})
export class ContractsSummaryComponent implements OnInit {
	@Input() contracts: Contract[] = [];

	constructor() { }

	get numSignedContracts(): number {
        return this.contracts.filter((contract: Contract) => contract.signed !== null).length;
	}
	
	get numUnsignedContracts(): number {
		return this.contracts.filter((contract: Contract) => contract.signed === null).length;
	}

	get unsignedContracts(): Contract[] {
		return this.contracts.filter((contract: Contract) => contract.signed === null);
	}

	ngOnInit() {
	}

}
