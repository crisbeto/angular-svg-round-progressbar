import {Injectable, Inject, Optional} from '@angular/core';
import {DOCUMENT} from '@angular/common';

const DEGREE_IN_RADIANS: number = Math.PI / 180;

@Injectable({providedIn: 'root'})
export class RoundProgressService {
  private base: HTMLBaseElement;
  private hasPerf: boolean;
  public supportsSvg: boolean;

  constructor(@Optional() @Inject(DOCUMENT) document: any) {
    this.supportsSvg = !!(
      document &&
      document.createElementNS &&
      document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
    );

    this.base = document && document.head.querySelector('base');
    this.hasPerf =
      typeof window !== 'undefined' &&
      window.performance &&
      window.performance.now &&
      typeof window.performance.now() === 'number';
  }

  /**
   * Resolves a SVG color against the page's `base` tag.
   */
  resolveColor(color: string): string {
    if (this.base && this.base.href) {
      const hashIndex = color.indexOf('#');

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
    return this.hasPerf ? window.performance.now() : Date.now();
  }

  /**
   * Generates the value for an SVG arc.
   *
   * @param current Current value.
   * @param total Maximum value.
   * @param pathRadius Radius of the SVG path.
   * @param elementRadius Radius of the SVG container.
   * @param isSemicircle Whether the element should be a semicircle.
   */
  getArc(current: number, total: number, pathRadius: number, elementRadius: number,
         isSemicircle = false): string {
    const value = Math.max(0, Math.min(current || 0, total));
    const maxAngle = isSemicircle ? 180 : 359.9999;
    const percentage = total === 0 ? maxAngle : (value / total) * maxAngle;
    const start = this._polarToCartesian(elementRadius, pathRadius, percentage);
    const end = this._polarToCartesian(elementRadius, pathRadius, 0);
    const arcSweep = percentage <= 180 ? 0 : 1;

    return `M ${start} A ${pathRadius} ${pathRadius} 0 ${arcSweep} 0 ${end}`;
  }

  /**
   * Converts polar cooradinates to Cartesian.
   *
   * @param elementRadius Radius of the wrapper element.
   * @param pathRadius Radius of the path being described.
   * @param angleInDegrees Degree to be converted.
   */
  private _polarToCartesian(elementRadius: number, pathRadius: number,
                            angleInDegrees: number): string {
    const angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
    const x = elementRadius + pathRadius * Math.cos(angleInRadians);
    const y = elementRadius + pathRadius * Math.sin(angleInRadians);

    return x + ' ' + y;
  }
}
