import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BbsRoutingModule } from './bbs-routing.module';
import { BbsHomeComponent } from './bbs-home/bbs-home.component';

@NgModule({
  imports: [
    CommonModule,
    BbsRoutingModule
  ],
  declarations: [BbsHomeComponent]
})
export class BbsModule { }
