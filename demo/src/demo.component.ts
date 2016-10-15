import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <h1>{{ typedStuff }}</h1>
    <input [(ngModel)]="typedStuff" />
    <input type="text" [placeholder]="typedStuff" />
   `
})
export class DemoComponent {
  private typedStuff = 'Hello world';
};
