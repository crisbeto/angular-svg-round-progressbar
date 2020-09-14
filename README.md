# Angular SVG round progressbar
Angular module that uses SVG to create a circular progressbar

## [Demo](http://crisbeto.github.io/angular-svg-round-progressbar/)

## [Click here for the Angular 1.x version](https://github.com/crisbeto/angular-svg-round-progressbar/tree/angular-1.x)

## Install
First you have to install the module through npm:

```bash
npm install angular-svg-round-progressbar --save
```

Afterwards you need to import the `RoundProgressModule` in your module:

```typescript
import {NgModule} from '@angular/core';
import {RoundProgressModule} from 'angular-svg-round-progressbar';

@NgModule({
  imports: [RoundProgressModule]
})
export class YourModule {};
```

If you're using SystemJS as your module loader, there is also a UMD bundle at `./node_modules/angular-svg-round-progressbar/dist/round-progress.umd.js`.

## Options
| Name           | Description                                                                                               | Required  | Default value     | Possible values   |
| ---            | ---                                                                                                       | ---       | ---               | ---               |
| `current`      | The current progress. Limited by the `max` option.                                                        | Yes       | `undefined`       | `number`          |
| `max`          | The progress' maximum value.                                                                              | Yes       | `undefined`       | `number`          |
| `radius`       | Radius of the circle.                                                                                     | No        | `125`             | `number`          |
| `color`        | The color of the `current` value on the circle.                                                           | No        | `#45ccce`         | `string`          |
| `background`   | Color of the circle's background.                                                                         | No        | `#eaeaea`         | `string`          |
| `stroke`       | Specifies the circle's thickness.                                                                         | No        | `15`              | `number`          |
| `semicircle`   | Whether the progressbar should be a full circle or a semicircle.                                          | No        | `false`           | `boolean`         |
| `clockwise`    | Whether the progressbar should rotate clockwise or counter-clockwise.                                     | No        | `true`            | `boolean`         |
| `responsive`   | Whether the progressbar should fit inside its parent container. **Note** Turning this option on will override the specified radius in order to make the circle fit in its parent. The radius to stroke ratio won't change.                                     | No        | `false`            | `boolean`           |
| `rounded`      | Whether the current progress ending should be rounded or straight.                                        | No        | `false`           | `boolean`           |
| `duration`     | The duration of the animation. Pass 0 for no animation.                                                   | No        | `800`             | `number`          |
| `animationDelay` | Milliseconds to wait before starting an animation.                                                     | No         | `0`               | `number`          |
| `onRender`     | Callback function that gets executed every time the circle is animated. The function gets called with the current progress as it is being animated.                                | No        | `undefined`       | `Function`         |
| `animation`    | The easing function that will be used when animating.                                                     | No        | easeOutCubic      | linearEase <br> easeInQuad <br> easeOutQuad <br> easeInOutQuad <br> easeInCubic <br> easeOutCubic <br> easeInOutCubic <br> easeInQuart <br> easeOutQuart <br> easeInOutQuart <br> easeInQuint <br> easeOutQuint <br> easeInOutQuint <br> easeInSine <br> easeOutSine <br> easeInOutSine <br> easeInExpo <br> easeOutExpo <br> easeInOutExpo <br> easeInCirc <br> easeOutCirc <br> easeInOutCirc <br> easeInElastic <br> easeOutElastic <br> easeInOutElastic <br> easeInBack <br> easeOutBack <br> easeInOutBack <br> easeInBounce <br> easeOutBounce <br> easeInOutBounce <br> |


### Minimal example:
```html
<round-progress [current]="current" [max]="max"></round-progress>
```

### Full example:
```html
<round-progress
    [current]="current"
    [max]="max"
    [color]="'#45ccce'"
    [background]="'#eaeaea'"
    [radius]="125"
    [stroke]="20"
    [semicircle]="true"
    [rounded]="true"
    [clockwise]="false"
    [responsive]="false"
    [duration]="800"
    [animation]="'easeInOutQuart'"
    [animationDelay]="0"
    (onRender)="doSomethingWithCurrentValue($event)"></round-progress>
```

### Configuring the default values
The module comes with some pre-configured options for things like colors, size, stroke etc. If these
don't match your app's design, you can change the global defaults by providing a new value for the
`ROUND_PROGRESS_DEFAULTS` injection token. Whenever an option isn't defined on a `round-progress`
element, it's value will be taken from the defaults.

```typescript
import {NgModule} from '@angular/core';
import {
  RoundProgressModule,
  RoundProgressConfig,
  ROUND_PROGRESS_DEFAULTS
  } from 'angular-svg-round-progressbar';

@NgModule({
  imports: [RoundProgressModule],
  providers: [{
    provide: ROUND_PROGRESS_DEFAULTS,
    useValue: {
      color: '#f00',
      background: '#0f0'
    }
  }]
})
export class YourModule {};
```

## Browser support
* Internet Explorer 9+
* Firefox 28.0+
* Chrome 31+
* Safari 5.1+
* and pretty much any browser that supports SVG

**Note:** Some older browsers may require (a [polyfill for `requestAnimationFrame`](https://gist.github.com/paulirish/1579671)).
[Read more about the `requestAnimationFrame` browser support.](http://caniuse.com/#feat=requestanimationframe)


## Development
* `npm install` to install development dependencies
* `npm run build:lib` to build the library
* `npm run start` to start the demo

## Credits
* [Modernizr](http://modernizr.com/) for the SVG support test
* [Robert Penner](http://www.robertpenner.com/easing/) for the easing function
* [opsb](http://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle) for some of the math

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://anglebrackets.dev/"><img src="https://avatars2.githubusercontent.com/u/1952116?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Duncan</b></sub></a><br /><a href="https://github.com/@crisbeto/angular-svg-round-progressbar/commits?author=DuncanFaulkner" title="Code">💻</a> <a href="#maintenance-DuncanFaulkner" title="Maintenance">🚧</a> <a href="#platform-DuncanFaulkner" title="Packaging/porting to new platform">📦</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
