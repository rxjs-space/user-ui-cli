import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ThreadApi } from './api';
import { AuthService, SvgHolderService } from './services';
import { LayoutNavComponent } from './component/layout-nav/layout-nav.component';
import { HtmlViewerComponent } from './component/html-viewer/html-viewer.component';
import { MenuListComponent } from './component/menu-list/menu-list.component';
import { SvgHolderComponent } from './component/svg-holder/svg-holder.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [SharedComponent, NotFoundComponent,
    LayoutNavComponent, HtmlViewerComponent,
    MenuListComponent, SvgHolderComponent,],
  exports: [NotFoundComponent, LayoutNavComponent,
    HtmlViewerComponent, MenuListComponent,
    SvgHolderComponent,],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AuthService, ThreadApi, SvgHolderService]
    }
  }
 }
