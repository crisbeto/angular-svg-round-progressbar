# Angular SVG round progressbar

AngularJS module that uses SVG to create a circular progressbar

## [Demo](http://crisbeto.github.io/angular-svg-round-progressbar/)

## Install

Include Angular and [roundProgress.min.js](https://raw.githubusercontent.com/crisbeto/angular-svg-round-progressbar/master/build/roundProgress.min.js) or [roundProgress.js](https://raw.githubusercontent.com/crisbeto/angular-svg-round-progressbar/master/build/roundProgress.js) in your page. You can use npm, bower, or a script-tag:

**npm**

`npm install angular-svg-round-progressbar`

**bower**

`bower install angular-svg-round-progressbar`

**cdn**

`<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-svg-round-progressbar/0.4.4/roundProgress.min.js"></script>`


Add `angular-svg-round-progressbar` to your app's module dependencies:

```javascript
angular.module('someModule', ['angular-svg-round-progressbar'])
```

## Options

* To edit the default values, change the options in the `roundProgressConfig` constant.
* Since the `0.2.0` release this directive uses dynamic binding. For example, if you want to change the fill color at a certain value, you can use `color="{{ (current / max < 0.5) ? '#ff8080' : '#45ccce' }}"`.
* Since the `0.3.6` release you can nest progressbar directives inside each other.

| Name           | Description                                                                                               | Required  | Default value     | Possible values   |
| ---            | ---                                                                                                       | ---       | ---               | ---               |
| `current`      | The current progress. Limited by the `max` option.                                                        | Yes       | undefined         | Integer           |
| `max`          | The progress' maximum value.                                                                              | Yes       | undefined         | Integer           |
| `radius`       | Radius of the circle.                                                                                     | No        | 50                | Integer           |
| `color`        | The color of the `current` value on the circle.                                                           | No        | #45ccce           | Hex color or string. Refer to [this example](https://github.com/crisbeto/angular-svg-round-progressbar/issues/29) for an example of using a gradient.        |
| `bgcolor`      | Color of the circle's background.                                                                         | No        | #eaeaea           | Hex color or string. Refer to [this example](https://github.com/crisbeto/angular-svg-round-progressbar/issues/29) for an example of using a gradient.         |
| `stroke`       | Specifies the circle's thickness.                                                                         | No        | 15                | Integer           |
| `semi`         | Whether the progressbar should be a full circle or a semicircle.                                          | No        | false             | Boolean           |
| `clockwise`    | Whether the progressbar should rotate clockwise or counter-clockwise.                                     | No        | true              | Boolean           |
| `responsive`   | Whether the progressbar should fit inside its parent container. **Note** Turning this option on will override the specified radius in order to make the circle fit in its parent. The radius to stroke ratio won't change.                                     | No        | false              | Boolean           |
| `rounded`      | Whether the current progress ending should be rounded or straight.                                        | No        | false             | Boolean           |
| `duration`     | The duration of the animation. Pass 0 for no animation.                                                   | No        | 800               | Integer           |
| `animation-delay` | Milliseconds to wait before starting an animation.                                                     | No        | 0               | Integer           |
| `on-render` | Callback function that gets executed every time the circle is animated. The function gets called with the following arguments: 1. the current progress 2. the options that are being used to render the circle 3. the root element of the circle.                                                  | No        | undefined         | Function           |
| `offset`       | The margin between the edge of the circle and the SVG element. Mostly used when nesting progressbars. If you pass in "inherit", the offset will be calculated based on the size of the parent progressbar(s)     | No        | 0                 | 'inherit' or Integer           |
| `animation`    | The easing function that will be used when animating.                                                     | No        | easeOutCubic      | linearEase <br> easeInQuad <br> easeOutQuad <br> easeInOutQuad <br> easeInCubic <br> easeOutCubic <br> easeInOutCubic <br> easeInQuart <br> easeOutQuart <br> easeInOutQuart <br> easeInQuint <br> easeOutQuint <br> easeInOutQuint <br> easeInSine <br> easeOutSine <br> easeInOutSine <br> easeInExpo <br> easeOutExpo <br> easeInOutExpo <br> easeInCirc <br> easeOutCirc <br> easeInOutCirc <br> easeInElastic <br> easeOutElastic <br> easeInOutElastic <br> easeInBack <br> easeOutBack <br> easeInOutBack <br> easeInBounce <br> easeOutBounce <br> easeInOutBounce <br> |


### Example:

```html
<round-progress
    max="max"
    current="current"
    color="#45ccce"
    bgcolor="#eaeaea"
    radius="100"
    stroke="20"
    semi="true"
    rounded="true"
    clockwise="false"
    responsive="false"
    duration="800"
    animation="easeInOutQuart"
    animation-delay="0"></round-progress>
```

## Browser support

* Internet Explorer 9+
* Firefox 28.0+
* Chrome 31+
* Safari 5.1+
* and pretty much any browser that supports SVG


## Development

*  `npm install` to install development dependencies
*  `grunt` to run a development server. Not mandatory(you can run the build/index.html directly), but more convenient.
*  `grunt build` to build minified demo in build/
*  `grunt deploy` to build minified demo and push it to gh-pages branch


## Credits

* Erik Möller for the requestAnimationFrame shim
* [Modernizr](http://modernizr.com/) for the SVG support test
* [Robert Penner](http://www.robertpenner.com/easing/) for the easing function
* [opsb](http://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle) for some of the math
* [konsumer](https://github.com/konsumer) for build-system & deployment stuff
