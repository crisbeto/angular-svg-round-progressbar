import {Component, ViewEncapsulation} from '@angular/core';
import {RoundProgressEase} from 'round-progress';

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
  rounded: boolean = true;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#45ccce';
  background: string = '#eaeaea';
  strokeBackground: number = 10;
  duration: number = 800;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: string[] = [];
  gradient: boolean = false;
  internalCircle: boolean = true;
  internalColor: string = '#eaeaea';
  internalRadius: number = 100;
  realCurrent: number = 0;

  constructor(private _ease: RoundProgressEase) {
    // Kinda hacky way to get all of the easing functions at run-time, because it can
    // technically fetch something from up the prototype chain.
    for (let prop in _ease) {
      if (prop.toLowerCase().indexOf('ease') > -1) {
        this.animations.push(prop);
      };
    }
  }

  increment(amount = 1) {
    this.current += amount;
  }

  getOverlayStyle() {
    let isSemi = this.semicircle;
    let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      'top': isSemi ? 'auto' : '50%',
      'bottom': isSemi ? '5%' : 'auto',
      'left': '50%',
      'transform': transform,
      '-moz-transform': transform,
      '-webkit-transform': transform,
      'font-size': this.radius / 3.5 + 'px'
    };
  }
};
