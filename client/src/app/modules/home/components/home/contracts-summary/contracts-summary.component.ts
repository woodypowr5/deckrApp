import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/types/contract.class';

@Component({
  selector: 'app-contracts-summary',
  templateUrl: './contracts-summary.component.html',
  styleUrls: ['./contracts-summary.component.scss']
})
export class ContractsSummaryComponent implements OnInit {
	@Input() contracts: Contract[] = [];

	constructor() { }

	get numCompletedContracts(): number {
        return this.contracts.filter((contract: Contract) => contract.signed === true).length;
    }

	ngOnInit() {
	}

}
