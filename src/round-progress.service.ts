import {Injectable} from '@angular/core';

const DEGREE_IN_RADIANS: number = Math.PI / 180;
const HAS_DOCUMENT = typeof document !== 'undefined';
const BASE: HTMLBaseElement = HAS_DOCUMENT && document.head.querySelector('base');
const HAS_PERF =
  typeof window !== 'undefined' &&
  window.performance &&
  window.performance.now &&
  typeof window.performance.now() === 'number';

@Injectable()
export class RoundProgressService {
  supportsSvg: boolean;

  constructor() {
    this.supportsSvg = !!(
      HAS_DOCUMENT &&
      document.createElementNS &&
      document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
    );
  }

  /**
   * Resolves a SVG color against the page's `base` tag.
   * @param  {string} color
   * @return {string}
   */
  resolveColor(color: string): string {
    if (BASE && BASE.href) {
      let hashIndex = color.indexOf('#');

      if (hashIndex > -1 && color.indexOf('url') > -1) {
        return color.slice(0, hashIndex) + location.href + color.slice(hashIndex);
      }
    }

    return color;
  }

  /**
   * Generates a timestamp.
   * @return {number}
   */
  getTimestamp(): number {
    return HAS_PERF ? window.performance.now() : Date.now();
  }

  /**
   * Generates the value for an SVG arc.
   * @param  {number}  current       Current value.
   * @param  {number}  total         Maximum value.
   * @param  {number}  pathRadius    Radius of the SVG path.
   * @param  {number}  elementRadius Radius of the SVG container.
   * @param  {boolean=false} isSemicircle  Whether the element should be a semicircle.
   * @return {string}
   */
  getArc(current: number, total: number, pathRadius: number,
         elementRadius: number, isSemicircle = false): string {

    let value = Math.max(0, Math.min(current || 0, total));
    let maxAngle = isSemicircle ? 180 : 359.9999;
    let percentage = (value / total) * maxAngle;
    let start = this._polarToCartesian(elementRadius, pathRadius, percentage);
    let end = this._polarToCartesian(elementRadius, pathRadius, 0);
    let arcSweep = (percentage <= 180 ? 0 : 1);

    return `M ${start} A ${pathRadius} ${pathRadius} 0 ${arcSweep} 0 ${end}`;
  };

  /**
   * Converts polar cooradinates to Cartesian.
   * @param  {number} elementRadius  Radius of the wrapper element.
   * @param  {number} pathRadius     Radius of the path being described.
   * @param  {number} angleInDegrees Degree to be converted.
   * @return {string}
   */
  private _polarToCartesian(elementRadius: number, pathRadius: number,
    angleInDegrees: number): string {

    let angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
    let x = elementRadius + (pathRadius * Math.cos(angleInRadians));
    let y = elementRadius + (pathRadius * Math.sin(angleInRadians));

    return x + ' ' + y;
  }
};
