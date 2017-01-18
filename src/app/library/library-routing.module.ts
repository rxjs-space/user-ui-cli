import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryHomeComponent } from './library-home/library-home.component';
import { HomeComponent, ShowComponent, DataResolverService } from '../shared';
import { libraryConst } from './library';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LibraryHomeComponent },
  { path: libraryConst.articles.secId, data: {title: libraryConst.articles.secTitle}, children: [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: ':id', data: {title: libraryConst.articles.itemTitle}, pathMatch: 'full', component: ShowComponent },
  ]},
  { path: libraryConst.authors.secId, data: {title: libraryConst.authors.secTitle}, children: [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: ':id', data: { title: libraryConst.authors.itemTitle } , pathMatch: 'full', component: ShowComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DataResolverService]
})
export class LibraryRoutingModule { }
