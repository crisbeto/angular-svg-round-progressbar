import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RoundprogressModule } from '@crisbeto/round-progress';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RoundprogressModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
