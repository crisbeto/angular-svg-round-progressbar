import { Component, Input, OnChanges } from '@angular/core';
import { RoundProgressService } from './round-progress.service';
import { RoundProgressEase } from './round-progress.ease';

// TODO:
// - look into ngStyle for the inline styles
// - default config values
// - look into different change detection strategy to reduce DOM manipulations. currently they
// happen for each frame of the animation.
@Component({
  selector: 'round-progress',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [style.width]="_diameter + 'px'"
      [style.height]="_diameter + 'px'"
      [attr.viewBox]="'0 0 ' + _diameter + ' ' + _diameter">

      <circle
        fill="none"
        [attr.cx]="radius"
        [attr.cy]="radius"
        [attr.r]="radius - stroke / 2"
        [style.stroke]="_service.resolveColor(background)"
        [style.stroke-width]="stroke"/>

      <path
        fill="none"
        [attr.stroke]="_service.resolveColor(color)"
        [attr.stroke-width]="stroke"
        [attr.d]="_path"/>
    </svg>
  `,
  host: {
    role: 'progressbar',
    '[attr.aria-valuemin]': 'current',
    '[attr.aria-valuemax]': 'max',
  }
})
export class RoundProgressComponent implements OnChanges {
  private _path: string;
  private _lastAnimationId: number = 0;

  get _diameter(): number {
    return this.radius * 2;
  }

  constructor(
    private _service: RoundProgressService,
    private _easingFunctions: RoundProgressEase
  ) {}

  /**
   * Animates a change in the current value.
   */
  private _animateChange(from: number, to: number): void {
    if (typeof from !== 'number') {
      from = 0;
    }

    if (to >= 0 && to <= this.max) {
      const self = this;
      const changeInValue = to - from;
      const duration = self.duration;
      const ease = self._easingFunctions[self.animation];
      const startTime = self._service.getTimestamp();
      const id = ++self._lastAnimationId;

      requestAnimationFrame(function animation(){
        var currentTime = Math.min(self._service.getTimestamp() - startTime, duration);

        self._setPath(ease(currentTime, from, changeInValue, duration));

        if (id === self._lastAnimationId && currentTime < duration) {
          requestAnimationFrame(animation);
        }
      });
    } else {
      this._setPath(to);
    }
  }

  /**
   * Sets the path dimensions.
   * @param {number} value Current value to be rendered.
   */
  private _setPath(value: number): void {
    this._path = this._service.getArc(value, this.max, this.radius - this.stroke / 2, this.radius);
  }

  ngOnChanges(changes): void {
    if (changes.current) {
      this._animateChange(changes.current.previousValue, changes.current.currentValue);
    } else {
      this._setPath(this.current);
    }
  }

  @Input()
  current: number;

  @Input()
  radius: number;

  @Input()
  max: number;

  @Input()
  animation: string = 'easeOutCubic';

  @Input()
  duration: number = 500;

  @Input()
  stroke: number = 15;

  @Input()
  color: string = '#45CCCE';

  @Input()
  background: string = '#EAEAEA';
}
