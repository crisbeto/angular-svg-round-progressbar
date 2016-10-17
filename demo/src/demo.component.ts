import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <input [(ngModel)]="current" type="number"/>
    <round-progress [current]="current"></round-progress>
   `
})
export class DemoComponent {
  private current: number = 57;
};
