import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsComponent } from './components/contracts/contracts.component';


const contractsRoutes: Routes = [
	{ path: 'contracts',  component: ContractsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(contractsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContractsRoutingModule { }