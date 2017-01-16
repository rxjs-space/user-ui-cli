import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ThreadApi } from './api';
import { AuthService } from './services';
import { LayoutNavComponent } from './component/layout-nav/layout-nav.component';
import { HtmlViewerComponent } from './component/html-viewer/html-viewer.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [SharedComponent, NotFoundComponent, LayoutNavComponent, HtmlViewerComponent],
  exports: [NotFoundComponent, LayoutNavComponent, HtmlViewerComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService, ThreadApi]
    }
  }
 }
