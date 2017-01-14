import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BbsComponent } from './bbs.component';

const routes: Routes = [
  { path: '', component: BbsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BbsRoutingModule { }
