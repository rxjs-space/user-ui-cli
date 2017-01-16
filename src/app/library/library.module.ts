import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    LibraryRoutingModule
  ],
  declarations: [LibraryComponent, HomeComponent]
})
export class LibraryModule { }
