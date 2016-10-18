import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <round-progress [current]="current" [radius]="radius"></round-progress>
    <input [(ngModel)]="current" type="number" step="10"/>
    <input [(ngModel)]="radius" type="number" step="10"/>
   `
})
export class DemoComponent {
  private current = 57;
  private radius = 100;
};
