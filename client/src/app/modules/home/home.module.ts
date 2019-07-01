import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		HomeRoutingModule
	],
	declarations: [
		HomeComponent	
	]
})
export class HomeModule {

}
