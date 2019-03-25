import { OnChanges, NgZone, EventEmitter, Renderer } from '@angular/core';
import { RoundProgressService } from './round-progress.service';
import { RoundProgressDefaults } from './round-progress.config';
import { RoundProgressEase } from './round-progress.ease';
export declare class RoundProgressComponent implements OnChanges {
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
