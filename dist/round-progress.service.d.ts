export declare class RoundProgressService {
    private _base;
    private _hasPerf;
    supportsSvg: boolean;
    constructor(document: any);
    /**
     * Resolves a SVG color against the page's `base` tag.
     */
    resolveColor(color: string): string;
    /**
     * Generates a timestamp.
     */
    getTimestamp(): number;
    /**
     * Generates the value for an SVG arc.
     * @param current       Current value.
     * @param total         Maximum value.
     * @param pathRadius    Radius of the SVG path.
     * @param elementRadius Radius of the SVG container.
     * @param isSemicircle  Whether the element should be a semicircle.
     */
    getArc(current: number, total: number, pathRadius: number, elementRadius: number, isSemicircle?: boolean): string;
    /**
     * Converts polar cooradinates to Cartesian.
     * @param elementRadius  Radius of the wrapper element.
     * @param pathRadius     Radius of the path being described.
     * @param angleInDegrees Degree to be converted.
     */
    private _polarToCartesian;
}
