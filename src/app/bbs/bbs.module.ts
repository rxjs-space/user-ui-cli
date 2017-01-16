import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BbsRoutingModule } from './bbs-routing.module';
import { BbsHomeComponent } from './bbs-home/bbs-home.component';
import { ThreadHomeComponent } from './thread-home/thread-home.component';
import { ThreadCreateComponent } from './thread-create/thread-create.component';
import { ThreadDetailsComponent } from './thread-details/thread-details.component';
import { ThreadListComponent } from './thread-list/thread-list.component';
import { ThreadNavComponent } from './thread-nav/thread-nav.component';
import { ThreadShowComponent } from './thread-show/thread-show.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BbsRoutingModule,
    SharedModule
  ],
  declarations: [BbsHomeComponent, ThreadHomeComponent,
    ThreadCreateComponent, ThreadDetailsComponent,
    ThreadListComponent, ThreadNavComponent, ThreadShowComponent]
})
export class BbsModule { }
