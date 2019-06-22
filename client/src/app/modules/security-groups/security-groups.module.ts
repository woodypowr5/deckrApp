import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SecurityGroupsRoutingModule } from './security-groups-routing.module';
import { SecurityGroupsComponent } from './components/security-groups/security-groups.component';

@NgModule({
	imports: [
		CommonModule,
		SecurityGroupsRoutingModule
	],
	declarations: [
		SecurityGroupsComponent
	]
})
export class SecurityGroupsModule {

}
