import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryHomeComponent } from './library-home/library-home.component';
import { HomeComponent, ArticleApi } from '../shared';


const articleHomeData = {
  title: 'article home',
  api: ArticleApi,
  reload: null
}

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LibraryHomeComponent },
  { path: 'article', data: { title: '精品文章' }, children: [
    { path: '', data: articleHomeData, pathMatch: 'full', component: HomeComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LibraryRoutingModule { }
