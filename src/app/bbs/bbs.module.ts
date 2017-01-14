import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BbsRoutingModule } from './bbs-routing.module';
import { BbsComponent } from './bbs.component';

@NgModule({
  imports: [
    CommonModule,
    BbsRoutingModule
  ],
  declarations: [BbsComponent]
})
export class BbsModule { }
