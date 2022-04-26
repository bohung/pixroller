import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lalatest0426Component } from './lalatest0426/lalatest0426.component';
import { Lala0426Component } from './lala0426/lala0426.component';

@NgModule({
  declarations: [
    AppComponent,
    Lalatest0426Component,
    Lala0426Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
