import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryHomeComponent } from './library-home/library-home.component';
import { HomeComponent, ShowComponent, RoutingData } from '../shared';

const articlesSecId = 'articles';
const articleHomeRoutingData: RoutingData = {
  secId: articlesSecId, sectionTitle: '精品文章'
};
const articleShowRoutingData: RoutingData = {
  secId: articlesSecId, sectionTitle: '文章内容',
  upperSectionTitle: articleHomeRoutingData.sectionTitle
};

const authorsSecId = 'authors';
const authorHomeRoutingData: RoutingData = {
  secId: authorsSecId, sectionTitle: '特约作者'
};
const authorShowRoutingData: RoutingData = {
  secId: authorsSecId, sectionTitle: '作者详情',
  upperSectionTitle: authorHomeRoutingData.sectionTitle
};


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LibraryHomeComponent },
  { path: 'article', children: [
    { path: '', data: articleHomeRoutingData, pathMatch: 'full', component: HomeComponent },
    { path: ':id', data: articleShowRoutingData, pathMatch: 'full', component: ShowComponent },
  ]},
  { path: 'author', children: [
    {path: '', data: authorHomeRoutingData, pathMatch: 'full', component: HomeComponent},
    {path: ':id', data: authorShowRoutingData, pathMatch: 'full', component: ShowComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LibraryRoutingModule { }
