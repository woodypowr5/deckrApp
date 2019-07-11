import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		AdminRoutingModule
	],
	declarations: [AdminComponent],
	entryComponents: []

})
export class AdminModule {

}
