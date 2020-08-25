import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoundprogressModule } from '@crisbeto/round-progress';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoundprogressModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
