import {Injectable, Inject, Optional} from '@angular/core';
import {DOCUMENT} from '@angular/common';

const DEGREE_IN_RADIANS: number = Math.PI / 180;

@Injectable()
export class RoundProgressService {
  private _base: HTMLBaseElement;
  private _hasPerf: boolean;
  public supportsSvg: boolean;

  constructor(@Optional() @Inject(DOCUMENT) document: any) {
    this.supportsSvg = !!(
      document &&
      document.createElementNS &&
      document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
    );

    this._base = document && document.head.querySelector('base');
    this._hasPerf = typeof window !== 'undefined' &&
                    window.performance &&
                    window.performance.now &&
                    typeof window.performance.now() === 'number';
  }

  /**
   * Resolves a SVG color against the page's `base` tag.
   */
  resolveColor(color: string): string {
    if (this._base && this._base.href) {
      let hashIndex = color.indexOf('#');

      if (hashIndex > -1 && color.indexOf('url') > -1) {
        return color.slice(0, hashIndex) + location.href + color.slice(hashIndex);
      }
    }

    return color;
  }

  /**
   * Generates a timestamp.
   */
  getTimestamp(): number {
    return this._hasPerf ? window.performance.now() : Date.now();
  }

  /**
   * Generates the value for an SVG arc.
   * @param current       Current value.
   * @param total         Maximum value.
   * @param pathRadius    Radius of the SVG path.
   * @param elementRadius Radius of the SVG container.
   * @param isSemicircle  Whether the element should be a semicircle.
   */
  getArc(current: number, total: number, pathRadius: number,
         elementRadius: number, isSemicircle = false): string {

    let value = Math.max(0, Math.min(current || 0, total));
    let maxAngle = isSemicircle ? 180 : 359.9999;
    let percentage = total === 0 ? maxAngle :  (value / total) * maxAngle;
    let start = this._polarToCartesian(elementRadius, pathRadius, percentage);
    let end = this._polarToCartesian(elementRadius, pathRadius, 0);
    let arcSweep = (percentage <= 180 ? 0 : 1);

    return `M ${start} A ${pathRadius} ${pathRadius} 0 ${arcSweep} 0 ${end}`;
  }

  /**
   * Converts polar cooradinates to Cartesian.
   * @param elementRadius  Radius of the wrapper element.
   * @param pathRadius     Radius of the path being described.
   * @param angleInDegrees Degree to be converted.
   */
  private _polarToCartesian(elementRadius: number, pathRadius: number,
    angleInDegrees: number): string {

    let angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
    let x = elementRadius + (pathRadius * Math.cos(angleInRadians));
    let y = elementRadius + (pathRadius * Math.sin(angleInRadians));

    return x + ' ' + y;
  }
}
