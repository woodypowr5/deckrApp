import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContractsProgressIndicatorComponent } from './components/home/progress-indicator/contracts-progress-indicator/contracts-progress-indicator.component';
import { TrainingsProgressIndicatorComponent } from './components/home/progress-indicator/trainings-progress-indicator/trainings-progress-indicator.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		HomeRoutingModule
	],
	declarations: [
		HomeComponent,
		ContractsProgressIndicatorComponent,
		TrainingsProgressIndicatorComponent	
	]
})
export class HomeModule {

}
