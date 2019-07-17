import { NgModule } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './components/registration/welcome/welcome.component';
import { LoginErrorComponent } from './components/login/login-error/login-error.component';

@NgModule({
	imports: [
		SharedModule,
		FlexLayoutModule
	],
	declarations: [
		LoginComponent, 
		RegistrationComponent, WelcomeComponent, LoginErrorComponent
	],
	entryComponents: [WelcomeComponent, LoginErrorComponent]
})
export class AuthModule {

}
