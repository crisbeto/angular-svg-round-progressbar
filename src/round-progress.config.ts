import { Injectable } from '@angular/core';

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

@Injectable()
export class RoundProgressConfig {
  private _options: RoundProgressDefaults = {
    radius: 125,
    animation: 'easeOutCubic',
    animationDelay: null,
    duration: 500,
    stroke: 15,
    color: '#45CCCE',
    background: '#EAEAEA',
    responsive: false,
    clockwise: true,
    semicircle: false,
    rounded: false
  };

  /** Configures the defaults. */
  setDefaults(config: RoundProgressDefaults): RoundProgressDefaults {
    return Object.assign(this._options, config);
  }

  /** Fetches a value from the defaults. */
  get(key: string) {
    return this._options[key];
  }
}
