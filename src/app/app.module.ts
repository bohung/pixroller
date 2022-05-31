import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SafePipe} from './safe.pipe';
import { DatabindingExampleComponent } from './databinding-example/databinding-example.component';
import { DatabindingPractice1Component } from './databinding-practice1/databinding-practice1.component'
// import { LTRMPDEXLECA22000Component } from './render/template/LTR_MPD_EXL_ECA22_1_000/ltrmpdexleca22000.component';
import { RenderComponent } from './render/render.component';
// import { ECAPracticeComponent } from './render/template/eca-practice/eca-practice.component';
// import { CssPractice1Component } from './css-practice1/css-practice1.component';

import { PagedjsPractic1Component } from './render/template/pagedjs-practic1/pagedjs-practic1.component';
import { Homework0517Component } from './render/template/homework0517/homework0517.component';




@NgModule({
  declarations: [
    AppComponent,
    DatabindingExampleComponent,
    SafePipe,
    DatabindingPractice1Component,
    // LTRMPDEXLECA22000Component,
    RenderComponent,
    // ECAPracticeComponent,
    // CssPractice1Component,
    PagedjsPractic1Component,
    Homework0517Component,



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
