import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UserViewsComponent } from './components/admin/user-views/user-views.component';
import { ProgressComponent } from './components/admin/progress/progress.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		AdminRoutingModule
	],
	declarations: [AdminComponent, UserViewsComponent, ProgressComponent],
	entryComponents: []

})
export class AdminModule {

}
