import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <round-progress
      [current]="current"
      [radius]="radius"
      [max]="max"
      [responsive]="responsive"
      [clockwise]="clockwise"
      [semicircle]="semicircle"></round-progress>

    <input [(ngModel)]="current" type="number" step="10"/>
    <input [(ngModel)]="radius" type="number" step="10"/>
    <input [(ngModel)]="responsive" type="checkbox"/>
    <input [(ngModel)]="clockwise" type="checkbox"/>
    <input [(ngModel)]="semicircle" type="checkbox"/>
   `
})
export class DemoComponent {
  current = 57;
  radius = 100;
  max = 100;
  responsive = false;
  clockwise = true;
  semicircle = true;
};
