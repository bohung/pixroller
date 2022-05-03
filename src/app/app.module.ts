import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lalatest0426Component } from './lalatest0426/lalatest0426.component';
import { Lala0426Component } from './lala0426/lala0426.component';

import {SafePipe} from './safe.pipe';
import { DatabindingExampleComponent } from './databinding-example/databinding-example.component'

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< .merge_file_a14184
    Lalatest0426Component,
    Lala0426Component
=======
    DatabindingExampleComponent,
    SafePipe
>>>>>>> .merge_file_a17512
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
