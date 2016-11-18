import { Component, Input, OnChanges, NgZone, ElementRef } from '@angular/core';
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
        [attr.transform]="getPathTransform()"/>
    </svg>
  `,
  host: {
    role: 'progressbar',
    '[attr.aria-valuemin]': 'current',
    '[attr.aria-valuemax]': 'max',
    '[style.width]': "responsive ? '' : _diameter + 'px'",
    '[style.height]': "responsive ? '' : _diameter + 'px'",
    '[class.responsive]': 'responsive'
  },
  styles: [
    `:host {
      display: block;
      position: relative;
    }`,
    `svg {
      overflow: hidden;
    }`,
    `:host.responsive {
      width: 100%;
      padding-bottom: 100%;
    }`,
    `:host.responsive > svg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }`
  ]
})
export class RoundProgressComponent implements OnChanges {
  private _path: SVGPathElement;
  private _lastAnimationId: number = 0;

  get _diameter(): number {
    return this.radius * 2;
  }

  constructor(
    private _service: RoundProgressService,
    private _easingFunctions: RoundProgressEase,
    private _ngZone: NgZone,
    private _element: ElementRef
  ) {}

  /**
   * Animates a change in the current value.
   */
  private _animateChange(from: number, to: number): void {
    if (typeof from !== 'number') {
      from = 0;
    }

    to = this._clamp(to);
    from = this._clamp(from);

    const self = this;
    const changeInValue = to - from;
    const duration = self.duration;
    const ease = self._easingFunctions[self.animation];
    const startTime = self._service.getTimestamp();
    const id = ++self._lastAnimationId;

    // Avoid firing change detection for each of the animation frames.
    self._ngZone.runOutsideAngular(() => {
      requestAnimationFrame(function animation(){
        let currentTime = Math.min(self._service.getTimestamp() - startTime, duration);

        self._setPath(ease(currentTime, from, changeInValue, duration));

        if (id === self._lastAnimationId && currentTime < duration) {
          requestAnimationFrame(animation);
        }
      });
    });
  }

  /**
   * Sets the path dimensions.
   */
  private _setPath(value: number): void {
    if (!this._path) {
      this._path = this._element.nativeElement.querySelector('path');
    }

    this._path.setAttribute('d',
      this._service.getArc(value, this.max, this.radius - this.stroke / 2, this.radius)
    );
  }

  /**
   * Clamps a value between the maximum and 0.
   */
  private _clamp(value: number): number {
    return Math.max(0, Math.min(value || 0, this.max));
  }

  /**
   * Determines the SVG transforms for the <path> node.
   */
  getPathTransform(): string {
    if (!this.clockwise) {
      return `scale(-1, 1) translate(-${this._diameter} 0)`;
    }
  }

  ngOnChanges(changes): void {
    if (changes.current) {
      this._animateChange(changes.current.previousValue, changes.current.currentValue);
    } else {
      this._setPath(this.current);
    }
  }

  @Input() current: number;
  @Input() radius: number;
  @Input() max: number;
  @Input() animation: string = 'easeOutCubic';
  @Input() duration: number = 500;
  @Input() stroke: number = 15;
  @Input() color: string = '#45CCCE';
  @Input() background: string = '#EAEAEA';
  @Input() responsive: boolean = false;
  @Input() clockwise: boolean = true;
}
