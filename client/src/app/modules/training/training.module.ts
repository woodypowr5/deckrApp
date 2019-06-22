import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './components/training/training.component';
import { TrainingRoutingModule } from './training-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
	imports: [
		CommonModule,
		TrainingRoutingModule,
		SharedModule
	],
	declarations: [
		TrainingComponent
	]
})
export class TrainingModule {

}
