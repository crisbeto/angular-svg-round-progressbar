import {InjectionToken, Provider} from '@angular/core';

export const ROUND_PROGRESS_DEFAULTS =
    new InjectionToken<RoundProgressDefaults>('ROUND_PROGRESS_DEFAULTS');

export const ROUND_PROGRESS_DEFAULTS_PROVIDER: Provider = {
  provide: ROUND_PROGRESS_DEFAULTS,
  useValue: {
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
    rounded: false,
  },
};

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
