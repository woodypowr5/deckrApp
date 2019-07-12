import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserViewsComponent } from './components/admin/user-views/user-views.component';
import { ProgressComponent } from './components/admin/progress/progress.component';
import { AuthAdminGuard } from '../auth/auth-admin.guard';

const adminRoutes: Routes = [
//   { path: 'admin',  component: AdminComponent, canLoad: [AuthAdminGuard]},
//   { path: 'admin/userviews',  component: UserViewsComponent, canLoad: [AuthAdminGuard]},
//   { path: 'admin/progress',  component: ProgressComponent, canLoad: [AuthAdminGuard]}
];

@NgModule({
  imports: [
    // RouterModule.forChild(adminRoutes)
  ],
  exports: [
    // RouterModule
  ]
})
export class AdminRoutingModule { }