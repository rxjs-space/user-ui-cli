import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthService } from './services';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [SharedComponent, NotFoundComponent],
  exports: [NotFoundComponent],
  providers: [AuthService]
})
export class SharedModule { }
