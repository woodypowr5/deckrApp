import { NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	imports: [
		SharedModule,
		FlexLayoutModule
	],
	declarations: [
		LoginComponent, 
		RegistrationComponent
	]
})
export class AuthModule {

}
