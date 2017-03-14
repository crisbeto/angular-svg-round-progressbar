export declare class DemoComponent {
    current: number;
    max: number;
    stroke: number;
    radius: number;
    semicircle: boolean;
    rounded: boolean;
    responsive: boolean;
    clockwise: boolean;
    color: string;
    background: string;
    duration: number;
    animation: string;
    animationDelay: number;
    animations: string[];
    gradient: boolean;
    realCurrent: number;
    increment(amount?: number): void;
    getOverlayStyle(): {
        'top': string;
        'bottom': string;
        'left': string;
        'transform': string;
        '-moz-transform': string;
        '-webkit-transform': string;
        'font-size': string;
    };
}
