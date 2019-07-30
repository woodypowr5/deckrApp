import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/types/contract';
import { ViewContractComponent } from './view-contract/view-contract.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Overlay } from '@angular/cdk/overlay';
import { ContractsService } from '../../../contracts.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
	@Input() contract: Contract;
	viewContractRef: MatDialogRef<ViewContractComponent>;

	constructor(
		public dialog: MatDialog, 
		private overlay: Overlay,
		private contractsService: ContractsService
	) { }

	ngOnInit() {
	}

	view(contract: Contract): void {
		this.viewContractRef = this.dialog.open(ViewContractComponent, {
			data: contract,
			scrollStrategy: this.overlay.scrollStrategies.noop()
		});
		const sub = this.viewContractRef.componentInstance.closeDialog.subscribe(() => {
			this.dialog.closeAll();
			this.contractsService.signContract(contract);
		});
	}
}
