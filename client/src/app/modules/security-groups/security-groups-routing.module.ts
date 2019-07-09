import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityGroupsComponent } from './components/security-groups/security-groups.component';


const securityGroupsRoutes: Routes = [
  { path: 'securitygroups',  component: SecurityGroupsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(securityGroupsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SecurityGroupsRoutingModule { }