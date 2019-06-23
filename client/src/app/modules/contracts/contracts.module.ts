import { NgModule } from "@angular/core";
import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './components/contracts/contracts.component';
import { CommonModule } from '@angular/common';
import { ContractComponent } from './components/contracts/contract/contract.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { ViewContractComponent } from './components/contracts/contract/view-contract/view-contract.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		ContractsRoutingModule
	],
	declarations: [
		ContractsComponent,
		ContractComponent,
		ViewContractComponent
	],
	entryComponents: [ViewContractComponent]
})
export class ContractsModule {

}
