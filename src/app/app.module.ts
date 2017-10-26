import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpModule, Http, Response, RequestOptions,Headers} from '@angular/http';
import {GetRequestComponent} from './get-request/get-request.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, GetRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
