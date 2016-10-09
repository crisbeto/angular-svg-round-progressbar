import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ typedStuff }}</h1>
    <input [(ngModel)]="typedStuff" />
    <input type="text" [placeholder]="typedStuff" />
   `
})
export class AppComponent {
  private typedStuff = 'Hello world';
};
