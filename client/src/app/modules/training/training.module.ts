import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './components/training/training.component';
import { TrainingRoutingModule } from './training-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { MarkCompleteComponent } from './components/training/mark-complete/mark-complete.component';
import { UpdateProgressComponent } from './components/training/update-progress/update-progress.component';

@NgModule({
	imports: [
		CommonModule,
		TrainingRoutingModule,
		SharedModule
	],
	declarations: [
		TrainingComponent,
		MarkCompleteComponent,
		UpdateProgressComponent
	],
	entryComponents: [MarkCompleteComponent, UpdateProgressComponent]

})
export class TrainingModule {

}
