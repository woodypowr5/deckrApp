import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { TrainingModule } from './modules/training/training.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { SecurityGroupsModule } from './modules/security-groups/security-groups.module';
import { SharedModule } from './shared/modules/shared.module';
import { HomeModule } from './modules/home/home.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminModule } from './modules/admin/admin.module';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './modules/auth/auth.interceptor';

@NgModule({
  declarations: [
	AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
	AuthModule,
	HomeModule,
	AdminModule,
    TrainingModule,
    ContractsModule, 
	SecurityGroupsModule,
	PdfViewerModule,
	HttpClientModule,
	JwtModule.forRoot({
		config: {
			tokenGetter: tokenGetter(),
			whitelistedDomains: ['localhost:4200', '*', 'https://deckr-prod.firebaseapp.com', 'deckr-prod.firebaseapp.com', 'deckr-prod.firebaseapp'],
		}
	  })
  ],
  providers: [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: AuthInterceptor,
		multi: true
	  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function tokenGetter(): any {
	return localStorage.getItem('token');
}