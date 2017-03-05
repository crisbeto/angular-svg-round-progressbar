import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {DemoComponent} from './demo.component';
import {RoundProgressModule} from 'round-progress';

@NgModule({
  imports: [BrowserModule, FormsModule, RoundProgressModule],
  declarations: [DemoComponent],
  bootstrap: [DemoComponent]
})
export class DemoModule { };
