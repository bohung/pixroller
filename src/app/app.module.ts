import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Template1Component } from './template1/template1.component';

import {SafePipe} from './safe.pipe';
import { DatabindingExampleComponent } from './databinding-example/databinding-example.component'

@NgModule({
  declarations: [
    AppComponent,
    Template1Component,
    DatabindingExampleComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
