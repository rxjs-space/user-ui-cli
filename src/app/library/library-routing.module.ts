import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryHomeComponent } from './library-home/library-home.component';
import { HomeComponent, ShowComponent, RoutingData } from '../shared';

const articleHomeRoutingData: RoutingData = {
  id: 'articles', sectionTitle: '精品文章'
};
const articleShowRoutingData: RoutingData = {
  id: 'articles', sectionTitle: '文章内容',
  upperSectionTitle: articleHomeRoutingData.sectionTitle
};
const authorHomeRoutingData: RoutingData = {
  id: 'articles', sectionTitle: '特约作者'
};
const authorShowRoutingData: RoutingData = {
  id: 'articles', sectionTitle: '作者详情',
  upperSectionTitle: authorHomeRoutingData.sectionTitle
};


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LibraryHomeComponent },
  { path: 'article', children: [
    { path: '', data: articleHomeRoutingData, pathMatch: 'full', component: HomeComponent },
    { path: ':id', data: articleShowRoutingData, pathMatch: 'full', component: ShowComponent },
  ]},
  // { path: 'author', children: [
  //   {path: '', pathMatch: 'full', component: HomeComponent},
  //   {path: ':id', pathMatch: 'full', component: ShowComponent},
  // ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LibraryRoutingModule { }
