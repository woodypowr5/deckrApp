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
import { WebApiService } from './shared/services/web-api.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './modules/admin/admin.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
