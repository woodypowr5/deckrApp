import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { TrainingModule } from './modules/training/training.module';
import { ContractsModule } from './modules/contracts/contracts.module';
import { SecurityGroupsModule } from './modules/security-groups/security-groups.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    TrainingModule,
    ContractsModule, 
    SecurityGroupsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
