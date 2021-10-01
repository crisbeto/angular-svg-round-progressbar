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
  templateUrl: './round-progress.component.html',
  styleUrls: ['./round-progress.component.css'],
  host: {
    role: 'progressbar',
    '[attr.aria-valuemin]': '0',
    '[attr.aria-valuemax]': 'max',
    '[attr.aria-valuenow]': 'current',
    '[style.width]': 'responsive ? "" : _getDiameter() + "px"',
    '[style.height]': '_getElementHeight()',
    '[style.padding-bottom]': '_getPaddingBottom()',
    '[class.responsive]': 'responsive',
  }
})
export class RoundProgressComponent implements OnChanges {
  private currentLinecap: 'round' | '' = '';

  /** Reference to the underlying `path` node. */
  @ViewChild('path') path: ElementRef<SVGPathElement>;

  /** Current value of the progress bar. */
  @Input() current: number;

  /** Maximum value of the progress bar. */
  @Input() max: number;

  /** Radius of the circle. */
  @Input() radius: number = this.defaults.radius;

  /** Name of the easing function to use when animating. */
  @Input() animation: string = this.defaults.animation;

  /** Time in millisconds by which to delay the animation. */
  @Input() animationDelay: number = this.defaults.animationDelay;

  /** Duration of the animation. */
  @Input() duration: number = this.defaults.duration;

  /** Width of the circle's stroke. */
  @Input() stroke: number = this.defaults.stroke;

  /** Color of the circle. */
  @Input() color: string = this.defaults.color;

  /** Background color of the circle. */
  @Input() background: string = this.defaults.background;

  /** Whether the circle should take up the width of its parent. */
  @Input() responsive: boolean = this.defaults.responsive;

  /** Whether the circle is filling up clockwise. */
  @Input() clockwise: boolean = this.defaults.clockwise;

  /** Whether to render a semicircle. */
  @Input() semicircle: boolean = this.defaults.semicircle;

  /** Whether the tip of the progress should be rounded off. */
  @Input() rounded: boolean = this.defaults.rounded;

  /** Emits when a new value has been rendered. */
  @Output() onRender: EventEmitter<number> = new EventEmitter();

  private lastAnimationId = 0;

  constructor(
    private service: RoundProgressService,
    private easing: RoundProgressEase,
    @Inject(ROUND_PROGRESS_DEFAULTS) private defaults: RoundProgressDefaults,
    private ngZone: NgZone
  ) {}

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
    self.ngZone.runOutsideAngular(() => {
      const start = () => {
        const startTime = self.service.getTimestamp();
        const id = ++self.lastAnimationId;

        requestAnimationFrame(function animation() {
          const currentTime = Math.min(self.service.getTimestamp() - startTime, duration);
          const value = self.easing[self.animation](currentTime, from, changeInValue, duration);

          self._updatePath(value);

          if (self.onRender.observers.length > 0) {
            self.onRender.emit(value);
          }

          if (id === self.lastAnimationId && currentTime < duration) {
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

  /** Updates the path apperance. */
  private _updatePath(value: number): void {
    if (this.path) {
      const arc = this.service.getArc(value, this.max, this.radius - this.stroke / 2,
                                      this.radius, this.semicircle);
      const path = this.path.nativeElement;

      // Remove the rounded line cap when the value is zero,
      // because SVG won't allow it to disappear completely.
      const linecap = this.rounded && value > 0 ? 'round' : '';

      // This is called on each animation frame so avoid
      // updating the line cap unless it has changed.
      if (linecap !== this.currentLinecap) {
        this.currentLinecap = linecap;
        path.style.strokeLinecap = linecap;
      }

      path.setAttribute('d', arc);
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
      return this.clockwise
        ? `translate(0, ${diameter}) rotate(-90)`
        : `translate(${diameter + ',' + diameter}) rotate(90) scale(-1, 1)`;
    } else if (!this.clockwise) {
      return `scale(-1, 1) translate(-${diameter} 0)`;
    }
  }

  /** Resolves a color through the service. */
  resolveColor(color: string): string {
    return this.service.resolveColor(color);
  }

  /** Change detection callback. */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.current) {
      this._animateChange(changes.current.previousValue, changes.current.currentValue);
    } else {
      this._updatePath(this.current);
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
