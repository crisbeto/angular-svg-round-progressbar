import { InjectionToken, Provider } from '@angular/core';
export declare const ROUND_PROGRESS_DEFAULTS: InjectionToken<RoundProgressDefaults>;
export declare const ROUND_PROGRESS_DEFAULTS_PROVIDER: Provider;
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
