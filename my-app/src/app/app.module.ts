import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomekModule } from './homek/homek.module';

@NgModule({
  declarations: [
    BrowserModule,
    AppRoutingModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomekModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
