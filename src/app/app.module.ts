import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { API_CONFIG, DEFAULT_API_CONFIG } from './shared/config';

/**
 * app's root module
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule.forRoot()
  ],
  providers: [
    {provide: API_CONFIG, useValue: DEFAULT_API_CONFIG}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
