import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BbsHomeComponent,
  ThreadHomeComponent, ThreadCreateComponent, ThreadShowComponent
} from './index';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BbsHomeComponent },
  { path: 'thread', children: [
    { path: '', pathMatch: 'full', redirectTo: 'mine' },
    { path: 'mine', data: { title: '我的社区' }, pathMatch: 'full', component: ThreadHomeComponent },
    { path: 'hot', data: { title: '最新帖' }, pathMatch: 'full', component: ThreadHomeComponent },
    { path: 'latest', data: { title: '热门帖' }, pathMatch: 'full', component: ThreadHomeComponent },
    { path: 'reward', data: { title: '悬赏贴' }, pathMatch: 'full', component: ThreadHomeComponent },
    { path: 'create', data: { title: '发帖提问' }, pathMatch: 'full', component: ThreadCreateComponent },
    { path: ':id', data: { title: '帖子详情' }, component: ThreadShowComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BbsRoutingModule { }
