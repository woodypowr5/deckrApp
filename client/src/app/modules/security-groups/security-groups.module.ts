import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SecurityGroupsRoutingModule } from './security-groups-routing.module';
import { SecurityGroupsComponent } from './components/security-groups/security-groups.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		SecurityGroupsRoutingModule
	],
	declarations: [
		SecurityGroupsComponent
	]
})
export class SecurityGroupsModule {

}
