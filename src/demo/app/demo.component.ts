import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RoundProgressComponent} from 'angular-svg-round-progressbar';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  imports: [RoundProgressComponent, NgStyle, FormsModule]
})
export class DemoComponent {
  current = 27;
  max = 50;
  stroke = 15;
  radius = 125;
  semicircle = false;
  rounded = false;
  responsive = false;
  clockwise = true;
  color = '#45ccce';
  background = '#eaeaea';
  innerCircleFill = 'none';
  duration = 800;
  animation = 'easeOutCubic';
  animationDelay = 0;
  animations = [
    'linearEase',
    'easeInQuad',
    'easeOutQuad',
    'easeInOutQuad',
    'easeInCubic',
    'easeOutCubic',
    'easeInOutCubic',
    'easeInQuart',
    'easeOutQuart',
    'easeInOutQuart',
    'easeInQuint',
    'easeOutQuint',
    'easeInOutQuint',
    'easeInSine',
    'easeOutSine',
    'easeInOutSine',
    'easeInExpo',
    'easeOutExpo',
    'easeInOutExpo',
    'easeInCirc',
    'easeOutCirc',
    'easeInOutCirc',
    'easeInElastic',
    'easeOutElastic',
    'easeInOutElastic',
    'easeInBack',
    'easeOutBack',
    'easeInOutBack',
    'easeInBounce',
    'easeOutBounce',
    'easeInOutBounce',
  ];
  gradient = false;
  realCurrent = 0;

  increment(amount = 1) {
    this.current += amount;
  }

  getOverlayStyle() {
    const isSemi = this.semicircle;
    const transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      top: isSemi ? 'auto' : '50%',
      bottom: isSemi ? '5%' : 'auto',
      left: '50%',
      transform,
      fontSize: this.radius / 3.5 + 'px',
    };
  }
}
