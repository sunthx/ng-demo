import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Logger } from "./logger";
import { BetterLogger } from "./better-logger";
import { NewLogger } from './new-logger'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  //1
  //providers:[Logger],
  //2
  // providers: [{
  //   provide: Logger, useClass: Logger
  // }],
  // 3
  // providers: [
  //   { provide: Logger, useClass: BetterLogger }
  // ],
  providers: [NewLogger, { provide: Logger, useExisting: NewLogger }],
  bootstrap: [AppComponent]
})
export class AppModule { }
