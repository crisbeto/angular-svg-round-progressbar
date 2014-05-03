# Angular SVG round progressbar

AngularJS module that uses SVG to create a circular progressar

## [Demo](http://crisbeto.github.io/angular-svg-round-progressbar/)

## Install

* Include Angular and `roundProgress.js` or `roundProgress.min.js` in your page.
* Add `angular-svg-round-progress` as a dependency

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

### Example:

```html
<div 
	round-progress 
	max="max" 
	current="current" 
	color="#45ccce" 
	bgcolor="#eaeaea" 
	radius="100" 
	stroke="20">
</div>
```

## Browser support

* Internet Explorer 9+
* Firefox 28.0+
* Chrome 31+
* Safari 5.1+
* and pretty much any browser that supports SVG

## Credits

* Erik Möller for the requestAnimationFrame shim
* [Modernizr](http://modernizr.com/) for the SVG support test
* [Kirupa](http://www.kirupa.com/forum/showthread.php?378287-Robert-Penner-s-Easing-Equations-in-Pure-JS-(no-jQuery)) for the easing function
