import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent, UserLoginComponent } from './index';

const routes: Routes = [
  { path: '', data: { title: '个人中心' }, pathMatch: 'full', component: UserHomeComponent},
  { path: 'login', data: { title: '登录' }, component: UserLoginComponent},
];

/**
 * routing module of user module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UserRoutingModule { }
