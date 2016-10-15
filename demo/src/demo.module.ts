import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DemoComponent } from './demo.component';
import { RoundProgress } from 'round-progress';

@NgModule({
  imports: [BrowserModule, FormsModule, RoundProgress],
  declarations: [DemoComponent],
  bootstrap: [DemoComponent]
})
export class DemoModule {};
