import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demo',
  templateUrl: './demo.html',
  encapsulation: ViewEncapsulation.None
})
export class DemoComponent {
  current: number = 27;
  max: number = 50;
  stroke: number = 15;
  radius: number = 125;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#45ccce';
  background: string = '#eaeaea';
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[];

  // TODO:
  // - set up the animations
  // - add the gradient example
  // - add the current progress overlay

  increment(amount = 1) {
    this.current += amount;
  }
};
