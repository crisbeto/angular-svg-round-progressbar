# Angular SVG round progressbar

AngularJS module that uses SVG to create a circular progressbar

## [Demo](http://crisbeto.github.io/angular-svg-round-progressbar/)

## Install

Include Angular and `roundProgress.js` or `roundProgress.min.js` in your page. You can use bower, or a script-tag:

`bower install angular-svg-round-progressbar`

or

`<script src="http://crisbeto.github.io/angular-svg-round-progressbar/roundProgress.min.js"></script>`


Add `angular-svg-round-progress` to your app's module dependencies:

```javascript
angular.module('someModule', ['angular-svg-round-progress'])
```

## Options

* `current` current progress, some value on the scope or a number
* `max` maximum value, some value on the scope or a number
* `radius` radius of the circle
* `color` hex color for the `current` value, example: `#45ccce`
* `bgcolor` hex background color, example: `#eaeaea`
* `stroke` specifies the thickness of the line
* `semi` boolen, specifies whether the progressbar should be a semicircle or a full circle
* To manually trigger a complete re-render of the progressbar, broadcast a "renderCircle" from a parent scope:

```javascript
$rootScope.$broadcast('renderCircle');
```

### Example:

```html
<div 
	round-progress 
	max="max" 
	current="current" 
	color="#45ccce" 
	bgcolor="#eaeaea" 
	radius="100" 
	stroke="20"
	semi="true">
</div>
```

## Browser support

* Internet Explorer 9+
* Firefox 28.0+
* Chrome 31+
* Safari 5.1+
* and pretty much any browser that supports SVG


## Development

*  `npm install` to install development dependencies
*  `grunt` to build minified demo in build/
*  `grunt deploy` to build minified demo and push it to gh-pages branch


## Credits

* Erik Möller for the requestAnimationFrame shim
* [Modernizr](http://modernizr.com/) for the SVG support test
* [Kirupa](http://www.kirupa.com/forum/showthread.php?378287-Robert-Penner-s-Easing-Equations-in-Pure-JS-(no-jQuery)) for the easing function
* [opsb](http://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle) for some of the math
* [konsumer](https://github.com/konsumer) for build-system & deployment stuff
