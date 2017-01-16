import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './shared/not-found/not-found.component';

/**
 * loading all modules lazily
 */
const routes: Routes = [
  { path: '', children: [
    { path: '', pathMatch: 'full', redirectTo: '/user' },
    { path: 'about', data: { title: '关于我们' }, loadChildren: './about/about.module#AboutModule' },
    { path: 'bbs', data: { title: '微站论坛' }, loadChildren: './bbs/bbs.module#BbsModule' },
    { path: 'library', data: { title: '资料中心' }, loadChildren: './library/library.module#LibraryModule' },
    { path: 'user', data: { title: '用户中心' }, loadChildren: './user/user.module#UserModule' },
    { path: '**', component: NotFoundComponent },
  ]}
];

/**
 * routing module for AppModule
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
