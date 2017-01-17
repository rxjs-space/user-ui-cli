import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AboutHomeComponent, AboutJoinComponent, AboutSiteComponent, AboutUsComponent,
  ShowcaseHomeComponent, ShowcaseDetailsComponent, ShowcaseListComponent, ShowcaseShowComponent,
  BookHomeComponent, BookDetailComponent, BookListComponent, BookShowComponent
} from './index';

const routes: Routes = [
  { path: '', pathMatch: 'full', data: { title: '首页' }, component: AboutHomeComponent },
  { path: 'join', data: { title: '合作共赢' }, component: AboutJoinComponent },
  { path: 'site', data: { title: '中文官网' }, component: AboutSiteComponent },
  { path: 'us', data: { title: '中文社区' }, component: AboutUsComponent },
  { path: 'book', data: { title: '图书推荐' }, children: [
      { path: '', pathMatch: 'full', component: BookHomeComponent },
      { path: ':id', component: BookShowComponent },
    ],
  },
  { path: 'showcase', data: { title: '成功案例' }, children: [
      { path: '', pathMatch: 'full', component: ShowcaseHomeComponent },
      { path: ':id', component: ShowcaseShowComponent} ,
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }
