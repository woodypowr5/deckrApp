import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { RegistrationComponent } from './modules/auth/components/registration/registration.component';
import { AuthAdminGuard } from './modules/auth/auth-admin.guard';
import { AdminComponent } from './modules/admin/components/admin/admin.component';


const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canLoad: [AuthAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
