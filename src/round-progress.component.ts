import {
  Component,
  Input,
  Output,
  OnChanges,
  NgZone,
  EventEmitter,
  ViewChild,
  Renderer,
  Inject,
} from '@angular/core';

import {RoundProgressService} from './round-progress.service';
import {ROUND_PROGRESS_DEFAULTS, RoundProgressDefaults} from './round-progress.config';
import {RoundProgressEase} from './round-progress.ease';

const GRAD_STROKE = "gradFill";
const DIRECTIONS = ["top", "right", "bottom", "left"];
const X1_POS = [0, 0, 0, 100];
const X2_POS = [0, 100, 0, 0];
const Y1_POS = [100, 0, 0, 0];
const Y2_POS = [0, 0, 100, 0];


@Component({
  selector: 'round-progress',
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" [attr.viewBox]="_viewBox">
      <defs>
        <linearGradient 
          id="${GRAD_STROKE}" 
          [attr.x1]="resolveGradCorner('x1')"
          [attr.x2]="resolveGradCorner('x2')"
          [attr.y1]="resolveGradCorner('y1')"
          [attr.y2]="resolveGradCorner('y2')"
          >
          <stop offset="0%" [style.stop-color]="gradStartColor" style="stop-opacity:1" />
          <stop offset="100%" [style.stop-color]="gradEndColor" style="stop-opacity:1" />
        </linearGradient>
      </defs>
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
        [style.stroke-linecap]="rounded ? 'round' : ''"
        [attr.transform]="getPathTransform()"
        [attr.stroke]="resolveStroke()"/>
    </svg>
  `,
  host: {
    'role': 'progressbar',
    '[attr.aria-valuemin]': 'current',
    '[attr.aria-valuemax]': 'max',
    '[style.width]': "responsive ? '' : _diameter + 'px'",
    '[style.height]': '_elementHeight',
    '[style.padding-bottom]': '_paddingBottom',
    '[class.responsive]': 'responsive'
  },
  styles: [
    `:host {
      display: block;
      position: relative;
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
  private _lastAnimationId: number = 0;

  constructor(
    private _service: RoundProgressService,
    private _easing: RoundProgressEase,
    @Inject(ROUND_PROGRESS_DEFAULTS) private _defaults: RoundProgressDefaults,
    private _ngZone: NgZone,
    private _renderer: Renderer
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
    self._ngZone.runOutsideAngular(() => {
      let start = () => {
        const startTime = self._service.getTimestamp();
        const id = ++self._lastAnimationId;

        requestAnimationFrame(function animation(){
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
      this._renderer.setElementAttribute(this._path.nativeElement, 'd', this._service.getArc(value,
          this.max, this.radius - this.stroke / 2, this.radius, this.semicircle));
    }
  }

  /** Clamps a value between the maximum and 0. */
  private _clamp(value: number): number {
    return Math.max(0, Math.min(value || 0, this.max));
  }

  /** Determines the SVG transforms for the <path> node. */
  getPathTransform(): string {
    let diameter = this._diameter;

    if (this.semicircle) {
      return this.clockwise ?
        `translate(0, ${diameter}) rotate(-90)` :
        `translate(${diameter + ',' + diameter}) rotate(90) scale(-1, 1)`;
    } else if (!this.clockwise) {
      return `scale(-1, 1) translate(-${diameter} 0)`;
    }
  }

  /** Resolves the color or the linear gradient for the fill  */
  resolveStroke(){
    return !this._useGrad ? this._service.resolveColor(this.color) : `url(#${GRAD_STROKE})`;
  }

  /** Resolves linear gradient direction */
  resolveGradCorner(corner): string{
    if (!this._useGrad) return "0%";
    let index = DIRECTIONS.indexOf(this.gradDirection);
    if (index < 0) index = DIRECTIONS.indexOf(this._defaults.gradDirection);
    let perc = 0;
    switch (corner){
      case 'x1':
        perc = X1_POS[index]; break;
      case 'x2':
        perc = X2_POS[index]; break;
      case 'y1':
        perc = Y1_POS[index]; break;
      case 'y2':
        perc = Y2_POS[index]; break;
    }
    return perc+"%";
  }

  /** Change detection callback. */
  ngOnChanges(changes): void {
    if (changes.current) {
      this._animateChange(changes.current.previousValue, changes.current.currentValue);
    } else {
      this._setPath(this.current);
    }
  }

  /** Diameter of the circle. */
  get _diameter(): number {
    return this.radius * 2;
  }

  /** The CSS height of the wrapper element. */
  get _elementHeight(): string {
    if (!this.responsive) {
      return (this.semicircle ? this.radius : this._diameter) + 'px';
    }
  }

  /** Viewbox for the SVG element. */
  get _viewBox(): string {
    let diameter = this._diameter;
    return `0 0 ${diameter} ${this.semicircle ? this.radius : diameter}`;
  }

  /** Bottom padding for the wrapper element. */
  get _paddingBottom(): string {
    if (this.responsive) {
      return this.semicircle ? '50%' : '100%';
    }
  }

  get _useGrad():boolean {
    return this.gradStartColor!==undefined && this.gradEndColor!==undefined;
  }


  @ViewChild('path')         _path;
  @Input() current:          number;
  @Input() max:              number;
  @Input() radius:           number = this._defaults.radius;
  @Input() animation:        string = this._defaults.animation;
  @Input() animationDelay:   number = this._defaults.animationDelay;
  @Input() duration:         number = this._defaults.duration;
  @Input() stroke:           number = this._defaults.stroke;
  @Input() color:            string = this._defaults.color;
  @Input() gradStartColor:   string;
  @Input() gradEndColor:     string;
  @Input() gradDirection:    string = this._defaults.gradDirection;
  @Input() background:       string = this._defaults.background;
  @Input() responsive:       boolean = this._defaults.responsive;
  @Input() clockwise:        boolean = this._defaults.clockwise;
  @Input() semicircle:       boolean = this._defaults.semicircle;
  @Input() rounded:          boolean = this._defaults.rounded;
  @Output() onRender:        EventEmitter<number> = new EventEmitter();
}
