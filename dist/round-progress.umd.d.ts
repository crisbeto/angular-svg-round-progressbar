declare module "round-progress.service" {
    export class RoundProgressService {
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
}
declare module "round-progress.config" {
    import { InjectionToken, Provider } from '@angular/core';
    export const ROUND_PROGRESS_DEFAULTS: InjectionToken<RoundProgressDefaults>;
    export const ROUND_PROGRESS_DEFAULTS_PROVIDER: Provider;
    export interface RoundProgressDefaults {
        radius?: number;
        animation?: string;
        animationDelay?: number;
        duration?: number;
        stroke?: number;
        color?: string;
        background?: string;
        responsive?: boolean;
        clockwise?: boolean;
        semicircle?: boolean;
        rounded?: boolean;
    }
}
declare module "round-progress.ease" {
    export class RoundProgressEase {
        linearEase(t: number, b: number, c: number, d: number): number;
        easeInQuad(t: number, b: number, c: number, d: number): number;
        easeOutQuad(t: number, b: number, c: number, d: number): number;
        easeInOutQuad(t: number, b: number, c: number, d: number): number;
        easeInCubic(t: number, b: number, c: number, d: number): number;
        easeOutCubic(t: number, b: number, c: number, d: number): number;
        easeInOutCubic(t: number, b: number, c: number, d: number): number;
        easeInQuart(t: number, b: number, c: number, d: number): number;
        easeOutQuart(t: number, b: number, c: number, d: number): number;
        easeInOutQuart(t: number, b: number, c: number, d: number): number;
        easeInQuint(t: number, b: number, c: number, d: number): number;
        easeOutQuint(t: number, b: number, c: number, d: number): number;
        easeInOutQuint(t: number, b: number, c: number, d: number): number;
        easeInSine(t: number, b: number, c: number, d: number): number;
        easeOutSine(t: number, b: number, c: number, d: number): number;
        easeInOutSine(t: number, b: number, c: number, d: number): number;
        easeInExpo(t: number, b: number, c: number, d: number): number;
        easeOutExpo(t: number, b: number, c: number, d: number): number;
        easeInOutExpo(t: number, b: number, c: number, d: number): number;
        easeInCirc(t: number, b: number, c: number, d: number): number;
        easeOutCirc(t: number, b: number, c: number, d: number): number;
        easeInOutCirc(t: number, b: number, c: number, d: number): number;
        easeInElastic(t: number, b: number, c: number, d: number): number;
        easeOutElastic(t: number, b: number, c: number, d: number): number;
        easeInOutElastic(t: number, b: number, c: number, d: number): number;
        easeInBack(t: number, b: number, c: number, d: number, s?: number): number;
        easeOutBack(t: number, b: number, c: number, d: number, s?: number): number;
        easeInOutBack(t: number, b: number, c: number, d: number, s?: number): number;
        easeInBounce(t: number, b: number, c: number, d: number): number;
        easeOutBounce(t: number, b: number, c: number, d: number): number;
        easeInOutBounce(t: number, b: number, c: number, d: number): number;
    }
}
declare module "round-progress.component" {
    import { OnChanges, NgZone, EventEmitter, Renderer } from '@angular/core';
    import { RoundProgressService } from "round-progress.service";
    import { RoundProgressDefaults } from "round-progress.config";
    import { RoundProgressEase } from "round-progress.ease";
    export class RoundProgressComponent implements OnChanges {
        private _service;
        private _easing;
        private _defaults;
        private _ngZone;
        private _renderer;
        private _lastAnimationId;
        constructor(_service: RoundProgressService, _easing: RoundProgressEase, _defaults: RoundProgressDefaults, _ngZone: NgZone, _renderer: Renderer);
        /** Animates a change in the current value. */
        private _animateChange;
        /** Sets the path dimensions. */
        private _setPath;
        /** Clamps a value between the maximum and 0. */
        private _clamp;
        /** Determines the SVG transforms for the <path> node. */
        getPathTransform(): string;
        /** Resolves a color through the service. */
        resolveColor(color: string): string;
        /** Change detection callback. */
        ngOnChanges(changes: any): void;
        /** Diameter of the circle. */
        readonly _diameter: number;
        /** The CSS height of the wrapper element. */
        readonly _elementHeight: string;
        /** Viewbox for the SVG element. */
        readonly _viewBox: string;
        /** Bottom padding for the wrapper element. */
        readonly _paddingBottom: string;
        _path: any;
        current: number;
        max: number;
        radius: number;
        animation: string;
        animationDelay: number;
        duration: number;
        stroke: number;
        color: string;
        background: string;
        responsive: boolean;
        clockwise: boolean;
        semicircle: boolean;
        rounded: boolean;
        onRender: EventEmitter<number>;
    }
}
declare module "index" {
    export class RoundProgressModule {
    }
    export * from "round-progress.component";
    export * from "round-progress.service";
    export * from "round-progress.ease";
    export * from "round-progress.config";
}
