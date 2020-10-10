import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RoundprogressModule} from 'angular-svg-round-progressbar';
import {DemoComponent} from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, RoundprogressModule, FormsModule],
  bootstrap: [DemoComponent],
})
export class DemoModule {}
