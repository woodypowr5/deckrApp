import { NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './components/registration/welcome/welcome.component';

@NgModule({
	imports: [
		SharedModule,
		FlexLayoutModule
	],
	declarations: [
		LoginComponent, 
		RegistrationComponent, WelcomeComponent
	],
	entryComponents: [WelcomeComponent]
})
export class AuthModule {

}
