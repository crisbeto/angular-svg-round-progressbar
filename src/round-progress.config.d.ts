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
export declare class RoundProgressConfig {
    private _options;
    /** Configures the defaults. */
    setDefaults(config: RoundProgressDefaults): RoundProgressDefaults;
    /** Fetches a value from the defaults. */
    get(key: string): any;
}
