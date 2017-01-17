import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutJoinComponent } from './about-join/about-join.component';
import { AboutSiteComponent } from './about-site/about-site.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShowcaseHomeComponent } from './showcase-home/showcase-home.component';
import { ShowcaseDetailsComponent } from './showcase-details/showcase-details.component';
import { ShowcaseListComponent } from './showcase-list/showcase-list.component';
import { ShowcaseShowComponent } from './showcase-show/showcase-show.component';
import { BookHomeComponent } from './book-home/book-home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookShowComponent } from './book-show/book-show.component';

import { SharedModule } from '../shared';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  declarations: [AboutHomeComponent, AboutJoinComponent, AboutSiteComponent, AboutUsComponent, 
  ShowcaseHomeComponent, ShowcaseDetailsComponent, ShowcaseListComponent, ShowcaseShowComponent, 
  BookHomeComponent, BookListComponent, BookShowComponent, BookDetailsComponent]
})
export class AboutModule { }
