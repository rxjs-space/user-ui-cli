import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ThreadApi, BookApi, ShowcaseApi, ArticleApi } from './api';
import { AuthService, SvgHolderService } from './services';
import { LayoutNavComponent } from './component/layout-nav/layout-nav.component';
import { HtmlViewerComponent } from './component/html-viewer/html-viewer.component';
import { MenuListComponent } from './component/menu-list/menu-list.component';
import { SvgHolderComponent } from './component/svg-holder/svg-holder.component';
import { HomeComponent } from './component/home/home.component';
import { ListComponent } from './component/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [SharedComponent, NotFoundComponent,
    LayoutNavComponent, HtmlViewerComponent,
    MenuListComponent, SvgHolderComponent,
    HomeComponent, ListComponent],
  exports: [NotFoundComponent, LayoutNavComponent,
    HtmlViewerComponent, MenuListComponent, SvgHolderComponent,
    HomeComponent, ListComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService, SvgHolderService,
        ThreadApi, BookApi, ShowcaseApi, ArticleApi
      ]
    }
  }
 }
