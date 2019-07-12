import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserViewsComponent } from './components/admin/user-views/user-views.component';
import { ProgressComponent } from './components/admin/progress/progress.component';

const adminRoutes: Routes = [
  { path: 'admin',  component: AdminComponent },
  { path: 'admin/userviews',  component: UserViewsComponent},
  { path: 'admin/progress',  component: ProgressComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }