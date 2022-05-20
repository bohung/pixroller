import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SafePipe} from './safe.pipe';
import { DatabindingExampleComponent } from './databinding-example/databinding-example.component';
import { DatabindingPractice1Component } from './databinding-practice1/databinding-practice1.component'
import { LTRMPDEXLECA22000Component } from './render/template/LTR_MPD_EXL_ECA22_1_000/ltrmpdexleca22000.component';
import { RenderComponent } from './render/render.component';
import { ECAPracticeComponent } from './render/template/eca-practice/eca-practice.component';
import { Test0517Component } from './test0517/test0517.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingExampleComponent,
    SafePipe,
    DatabindingPractice1Component,
    LTRMPDEXLECA22000Component,
    RenderComponent,
    ECAPracticeComponent,
    Test0517Component,
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
