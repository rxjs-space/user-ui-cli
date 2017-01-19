import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryHomeComponent } from './library-home/library-home.component';
import { HomeComponent, ShowComponent, DataResolverService } from '../shared';
import { apiConst } from '../shared/api';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LibraryHomeComponent },
  { path: apiConst.articles.secId, resolve: {items: DataResolverService}, data: {title: apiConst.articles.secTitle}, children: [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: ':id', data: {title: apiConst.articles.itemTitle}, pathMatch: 'full', component: ShowComponent },
  ]},
  { path: apiConst.authors.secId, resolve: {items: DataResolverService}, data: {title: apiConst.authors.secTitle}, children: [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: ':id', data: { title: apiConst.authors.itemTitle } , pathMatch: 'full', component: ShowComponent},
  ]},
  { path: apiConst.columns.secId, resolve: {items: DataResolverService}, data: {title: apiConst.columns.secTitle}, children: [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: ':id', data: { title: apiConst.columns.itemTitle } , pathMatch: 'full', component: ShowComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DataResolverService]
})
export class LibraryRoutingModule { }
