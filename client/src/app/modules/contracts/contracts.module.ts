import { NgModule } from "@angular/core";
import { ContractsRoutingModule } from './contracts-routing.module';
import { ContractsComponent } from './components/contracts/contracts.component';

@NgModule({
	imports: [
		ContractsRoutingModule
	],
	declarations: [
		ContractsComponent
	]
})
export class ContractsModule {

}
