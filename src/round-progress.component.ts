import {
  Component,
  Input,
  Output,
  OnChanges,
  NgZone,
  EventEmitter,
  ViewChild,
  Inject,
  ElementRef,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';

import {RoundProgressService} from './round-progress.service';
import {ROUND_PROGRESS_DEFAULTS, RoundProgressDefaults} from './round-progress.config';
import {RoundProgressEase} from './round-progress.ease';

@Component({
  selector: 'round-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" [attr.viewBox]="_getViewBox()">
      <circle
        fill="none"
        [attr.cx]="radius"
        [attr.cy]="radius"
        [attr.r]="radius - stroke / 2"
        [style.stroke]="resolveColor(background)"
        [style.stroke-width]="stroke"/>

      <path
        #path
        fill="none"
        [style.stroke-width]="stroke"
        [style.stroke]="resolveColor(color)"
        [style.stroke-linecap]="rounded ? 'round' : ''"
        [attr.transform]="getPathTransform()"/>
    </svg>
  `,
  host: {
    'role': 'progressbar',
    '[attr.aria-valuemin]': 'current',
    '[attr.aria-valuemax]': 'max',
    '[style.width]': "responsive ? '' : _getDiameter() + 'px'",
    '[style.height]': '_getElementHeight()',
    '[style.padding-bottom]': '_getPaddingBottom()',
    '[class.responsive]': 'responsive'
  },
  styles: [`
    :host {
      display: block;
      position: relative;
      overflow: hidden;
    }
    :host(.responsive) {
      width: 100%;
      padding-bottom: 100%;
    }
    :host(.responsive) > svg {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  `]
})
export class RoundProgressComponent implements OnChanges {
  /** Reference to the underlying `path` node. */
  @ViewChild('path', {static: false}) _path: ElementRef;

  /** Current value of the progress bar. */
  @Input() current: number;

  /** Maximum value of the progress bar. */
  @Input() max: number;

  /** Radius of the circle. */
  @Input() radius: number = this._defaults.radius;

  /** Name of the easing function to use when animating. */
  @Input() animation: string = this._defaults.animation;

  /** Time in millisconds by which to delay the animation. */
  @Input() animationDelay: number = this._defaults.animationDelay;

  /** Duration of the animation. */
  @Input() duration: number = this._defaults.duration;

  /** Width of the circle's stroke. */
  @Input() stroke: number = this._defaults.stroke;

  /** Color of the circle. */
  @Input() color: string = this._defaults.color;

  /** Background color of the circle. */
  @Input() background: string = this._defaults.background;

  /** Whether the circle should take up the width of its parent. */
  @Input() responsive: boolean = this._defaults.responsive;

  /** Whether the circle is filling up clockwise. */
  @Input() clockwise: boolean = this._defaults.clockwise;

  /** Whether to render a semicircle. */
  @Input() semicircle: boolean = this._defaults.semicircle;

  /** Whether the tip of the progress should be rounded off. */
  @Input() rounded: boolean = this._defaults.rounded;

  /** Emits when a new value has been rendered. */
  @Output() onRender: EventEmitter<number> = new EventEmitter();

  private _lastAnimationId = 0;

  constructor(
    private _service: RoundProgressService,
    private _easing: RoundProgressEase,
    @Inject(ROUND_PROGRESS_DEFAULTS) private _defaults: RoundProgressDefaults,
    private _ngZone: NgZone) {}

  /** Animates a change in the current value. */
  private _animateChange(from: number, to: number): void {
    if (typeof from !== 'number') {
      from = 0;
    }

    to = this._clamp(to);
    from = this._clamp(from);

    const self = this;
    const changeInValue = to - from;
    const duration = self.duration;

    // Avoid firing change detection for each of the animation frames.
    self._ngZone.runOutsideAngular(() => {
      let start = () => {
        const startTime = self._service.getTimestamp();
        const id = ++self._lastAnimationId;

        requestAnimationFrame(function animation() {
          let currentTime = Math.min(self._service.getTimestamp() - startTime, duration);
          let value = self._easing[self.animation](currentTime, from, changeInValue, duration);

          self._setPath(value);
          self.onRender.emit(value);

          if (id === self._lastAnimationId && currentTime < duration) {
            requestAnimationFrame(animation);
          }
        });
      };

      if (this.animationDelay > 0) {
        setTimeout(start, this.animationDelay);
      } else {
        start();
      }
    });
  }

  /** Sets the path dimensions. */
  private _setPath(value: number): void {
    if (this._path) {
      const arc = this._service.getArc(value, this.max, this.radius - this.stroke / 2,
        this.radius, this.semicircle);
      this._path.nativeElement.setAttribute('d', arc);
    }
  }

  /** Clamps a value between the maximum and 0. */
  private _clamp(value: number): number {
    return Math.max(0, Math.min(value || 0, this.max));
  }

  /** Determines the SVG transforms for the <path> node. */
  getPathTransform(): string {
    const diameter = this._getDiameter();

    if (this.semicircle) {
      return this.clockwise ?
        `translate(0, ${diameter}) rotate(-90)` :
        `translate(${diameter + ',' + diameter}) rotate(90) scale(-1, 1)`;
    } else if (!this.clockwise) {
      return `scale(-1, 1) translate(-${diameter} 0)`;
    }
  }

  /** Resolves a color through the service. */
  resolveColor(color: string): string {
    return this._service.resolveColor(color);
  }

  /** Change detection callback. */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.current) {
      this._animateChange(changes.current.previousValue, changes.current.currentValue);
    } else {
      this._setPath(this.current);
    }
  }

  /** Diameter of the circle. */
  _getDiameter(): number {
    return this.radius * 2;
  }

  /** The CSS height of the wrapper element. */
  _getElementHeight(): string {
    if (!this.responsive) {
      return (this.semicircle ? this.radius : this._getDiameter()) + 'px';
    }
  }

  /** Viewbox for the SVG element. */
  _getViewBox(): string {
    const diameter = this._getDiameter();
    return `0 0 ${diameter} ${this.semicircle ? this.radius : diameter}`;
  }

  /** Bottom padding for the wrapper element. */
  _getPaddingBottom(): string {
    if (this.responsive) {
      return this.semicircle ? '50%' : '100%';
    }
  }
}
