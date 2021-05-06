import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyComponent } from './app.component';

@NgModule({
  declarations: [
    MyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MyComponent]   //english meaning of bootstrap here : starting point
})
export class MyModule { }
