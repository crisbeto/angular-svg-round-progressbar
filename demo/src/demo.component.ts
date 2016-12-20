import { Component, ViewEncapsulation } from '@angular/core';
import { RoundProgressEase } from 'round-progress';

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
  animations: string[] = [];

  constructor(private _ease: RoundProgressEase) {
    // Kinda hacky way to get all of the easing functions at run-time, because it can
    // technically fetch something from up the prototype chain.
    for (let prop in _ease) {
      if (prop.toLowerCase().indexOf('ease') > -1) {
        this.animations.push(prop);
      };
    }
  }

  // TODO:
  // - add the gradient example
  // - add the current progress overlay
  increment(amount = 1) {
    this.current += amount;
  }
};
