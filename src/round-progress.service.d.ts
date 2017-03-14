export declare class RoundProgressService {
    supportsSvg: boolean;
    constructor();
    /**
     * Resolves a SVG color against the page's `base` tag.
     * @param  {string} color
     * @return {string}
     */
    resolveColor(color: string): string;
    /**
     * Generates a timestamp.
     * @return {number}
     */
    getTimestamp(): number;
    /**
     * Generates the value for an SVG arc.
     * @param  {number}  current       Current value.
     * @param  {number}  total         Maximum value.
     * @param  {number}  pathRadius    Radius of the SVG path.
     * @param  {number}  elementRadius Radius of the SVG container.
     * @param  {boolean=false} isSemicircle  Whether the element should be a semicircle.
     * @return {string}
     */
    getArc(current: number, total: number, pathRadius: number, elementRadius: number, isSemicircle?: boolean): string;
    /**
     * Converts polar cooradinates to Cartesian.
     * @param  {number} elementRadius  Radius of the wrapper element.
     * @param  {number} pathRadius     Radius of the path being described.
     * @param  {number} angleInDegrees Degree to be converted.
     * @return {string}
     */
    private _polarToCartesian(elementRadius, pathRadius, angleInDegrees);
}
