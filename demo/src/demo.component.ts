import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <div style="max-width: 500px">
      <round-progress
        [current]="current"
        [radius]="radius"
        [max]="max"
        [responsive]="responsive"
        [clockwise]="clockwise"
        [animationDelay]="delay"
        [semicircle]="semicircle"
        [rounded]="rounded"></round-progress>
    </div>

    <input [(ngModel)]="current" type="number" step="10"/>
    <input [(ngModel)]="radius" type="number" step="10"/>
    <input [(ngModel)]="delay" type="number"/>
    <input [(ngModel)]="responsive" type="checkbox"/>
    <input [(ngModel)]="clockwise" type="checkbox"/>
    <input [(ngModel)]="semicircle" type="checkbox"/>
    <input [(ngModel)]="rounded" type="checkbox"/>
   `
})
export class DemoComponent {
  current = 57;
  radius = 100;
  max = 100;
  responsive = false;
  clockwise = true;
  semicircle = false;
  rounded = false;
  delay = 0;
};
