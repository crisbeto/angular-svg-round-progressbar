import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DemoComponent } from './demo.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [DemoComponent],
  bootstrap: [DemoComponent]
})
export class DemoModule {};
