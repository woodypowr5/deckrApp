import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegistrationComponent } from './modules/auth/components/registration/registration.component';


const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training',   redirectTo: '/training', pathMatch: 'full' },
//   { path: 'training', component: LoginComponent },
//   { path: 'securiygroups', component: LoginComponent },
//   { path: 'contracts', component: ContractsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
