import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {DemoComponent} from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, RoundProgressModule, FormsModule],
  bootstrap: [DemoComponent],
})
export class DemoModule {}
