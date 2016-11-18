import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <round-progress
      [current]="current"
      [radius]="radius"
      [max]="max"
      [responsive]="responsive"></round-progress>

    <input [(ngModel)]="current" type="number" step="10"/>
    <input [(ngModel)]="radius" type="number" step="10"/>
    <input [(ngModel)]="responsive" type="checkbox"/>
   `
})
export class DemoComponent {
  current = 57;
  radius = 100;
  max = 100;
  responsive = false;
};
