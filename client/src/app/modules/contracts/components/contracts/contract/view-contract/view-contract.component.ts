import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { Contract } from 'src/app/shared/types/contract';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.component.html',
  styleUrls: ['./view-contract.component.scss']
})
export class ViewContractComponent implements OnInit {
	@Input() contract: Contract;
	@Output() closeDialog: EventEmitter<void> = new EventEmitter();
	private pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'; 

	constructor(
		@Inject(MAT_DIALOG_DATA) data
	) { 
		this.contract = data;
	}


	ngOnInit() {

	}

	sign() {
		this.closeDialog.emit();
	}
}
