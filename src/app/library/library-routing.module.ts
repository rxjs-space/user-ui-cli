import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryHomeComponent } from './library-home/library-home.component';
import { HomeComponent, ShowComponent, DataResolverService } from '../shared';
import { libraryConst as lc } from './library';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LibraryHomeComponent },
  { path: lc.articles.secId, resolve: {items: DataResolverService}, data: {title: lc.articles.secTitle}, children: [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: ':id', data: {title: lc.articles.itemTitle}, pathMatch: 'full', component: ShowComponent },
  ]},
  { path: lc.authors.secId, data: {title: lc.authors.secTitle}, children: [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: ':id', data: { title: lc.authors.itemTitle } , pathMatch: 'full', component: ShowComponent},
  ]},
  { path: lc.columns.secId, data: {title: lc.columns.secTitle}, children: [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: ':id', data: { title: lc.columns.itemTitle } , pathMatch: 'full', component: ShowComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DataResolverService]
})
export class LibraryRoutingModule { }
