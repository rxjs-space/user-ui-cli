import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryHomeComponent } from './library-home/library-home.component';
import { HomeComponent, ShowComponent, DataResolverService } from '../shared';
import { ApiService } from '../shared/api';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: LibraryHomeComponent },
  { path: ':secId', resolve: {items: DataResolverService}, data: {apiConst: ApiService.apiConst}, children: [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: ':id', pathMatch: 'full', component: ShowComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DataResolverService]
})
export class LibraryRoutingModule { }
