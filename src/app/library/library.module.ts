import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryHomeComponent } from './library-home/library-home.component';

import { SharedModule } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    LibraryRoutingModule,
    SharedModule
  ],
  declarations: [LibraryHomeComponent]
})
export class LibraryModule { }
