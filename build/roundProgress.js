// shim layer with setTimeout fallback
// credit Erik Möller and http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
'use strict';

(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame){
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame){
        window.cancelAnimationFrame = function(id) {
            window.clearTimeout(id);
        };
    }

}());

angular.module('angular-svg-round-progress', []);

'use strict';

angular.module('angular-svg-round-progress').constant('roundProgressConfig', {
    max:            50,
    semi:           false,
    rounded:        false,
    clockwise:      true,
    radius:         100,
    color:          "#45ccce",
    bgcolor:        "#eaeaea",
    stroke:         15,
    iterations:     50,
    animation:      "easeOutCubic"
});

'use strict';

angular.module('angular-svg-round-progress').service('roundProgressService', [function(){
    var service = {};

    // credits to http://modernizr.com/ for the feature test
    service.isSupported = !!(document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect);

    // utility function
    var polarToCartesian = function(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    };

    // credit to http://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
    service.updateState = function(val, total, R, ring, size, isSemicircle) {

        if(!size) return ring;

        var value       = val >= total ? total - 0.00001 : val,
            type        = isSemicircle ? 180 : 359.9999,
            perc        = total === 0 ? 0 : (value / total) * type,
            x           = size/2,
            start       = polarToCartesian(x, x, R, perc), // in this case x and y are the same
            end         = polarToCartesian(x, x, R, 0),
            arcSweep    = (perc <= 180 ? "0" : "1"),
            d = [
                "M", start.x, start.y,
                "A", R, R, 0, arcSweep, 0, end.x, end.y
            ].join(" ");

        return ring.attr('ng-attr-d', d);
    };

    // Easing functions by Robert Penner
    // Source: http://www.robertpenner.com/easing/
    // License: http://www.robertpenner.com/easing_terms_of_use.html

    service.animations = {

        // t: Current iteration
        // b: Start value
        // c: Change in value
        // d: Total iterations
        // jshint eqeqeq: false, -W041: true

        linearEase: function(t, b, c, d) {
            return c * t / d + b;
        },

        easeInQuad: function (t, b, c, d) {
            return c*(t/=d)*t + b;
        },

        easeOutQuad: function (t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },

        easeInOutQuad: function (t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },

        easeInCubic: function (t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },

        easeOutCubic: function (t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },

        easeInOutCubic: function (t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },

        easeInQuart: function (t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },

        easeOutQuart: function (t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },

        easeInOutQuart: function (t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },

        easeInQuint: function (t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },

        easeOutQuint: function (t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },

        easeInOutQuint: function (t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },

        easeInSine: function (t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },

        easeOutSine: function (t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },

        easeInOutSine: function (t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },

        easeInExpo: function (t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },

        easeOutExpo: function (t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },

        easeInOutExpo: function (t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },

        easeInCirc: function (t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },

        easeOutCirc: function (t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },

        easeInOutCirc: function (t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },

        easeInElastic: function (t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*0.3;
            if (a < Math.abs(c)) { a=c; s=p/4; }
            else s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },

        easeOutElastic: function (t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*0.3;
            if (a < Math.abs(c)) { a=c; s=p/4; }
            else s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },

        easeInOutElastic: function (t, b, c, d) {
            // jshint eqeqeq: false, -W041: true
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(0.3*1.5);
            if (a < Math.abs(c)) { a=c; s=p/4; }
            else s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -0.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
        },

        easeInBack: function (t, b, c, d, s) {
            // jshint eqeqeq: false, -W041: true
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },

        easeOutBack: function (t, b, c, d, s) {
            // jshint eqeqeq: false, -W041: true
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },

        easeInOutBack: function (t, b, c, d, s) {
            // jshint eqeqeq: false, -W041: true
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },

        easeInBounce: function (t, b, c, d) {
            return c - service.animations.easeOutBounce (d-t, 0, c, d) + b;
        },

        easeOutBounce: function (t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
            }
        },

        easeInOutBounce: function (t, b, c, d) {
            if (t < d/2) return service.animations.easeInBounce (t*2, 0, c, d) * 0.5 + b;
            return service.animations.easeOutBounce (t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
        }
    };

    return service;
}]);

'use strict';

angular.module('angular-svg-round-progress')
    .directive('roundProgress', ['$window', 'roundProgressService', 'roundProgressConfig', function($window, service, roundProgressConfig){

            var base = {
                restrict: "EA",
                replace: true,
                transclude: true
            };

            if(!service.isSupported){
                return angular.extend(base, {
                    // placeholder element to keep the structure
                    template: '<div class="round-progress" ng-transclude></div>'
                });
            }

            return angular.extend(base, {
                scope:{
                    current:        "=",
                    max:            "=",
                    semi:           "=",
                    rounded:        "=",
                    clockwise:      "=",
                    radius:         "@",
                    color:          "@",
                    bgcolor:        "@",
                    stroke:         "@",
                    iterations:     "@",
                    animation:      "@"
                },
                link: function (scope, element) {
                    var ring        = element.find('path'),
                        background  = element.find('circle'),
                        options     = angular.copy(roundProgressConfig);

                    var renderCircle = function(){
                        var isSemicircle     = options.semi;
                        var radius           = parseInt(options.radius) || 0;
                        var stroke           = parseInt(options.stroke);
                        var diameter         = radius*2;
                        var backgroundSize   = radius - (stroke/2);

                        element.css({
                            "width":        diameter + "px",
                            "height":       (isSemicircle ? radius : diameter) + "px",
                            "overflow":     "hidden" // on some browsers the background overflows, if in semicircle mode
                        });

                        ring.css({
                            "stroke":           options.color,
                            "stroke-width":     stroke,
                            "stroke-linecap":   options.rounded ? "round": "butt"
                        });

                        if(isSemicircle){
                            ring.attr("transform", options.clockwise ? "translate("+ 0 +","+ diameter +") rotate(-90)" : "translate("+ diameter +", "+ diameter +") rotate(90) scale(-1, 1)");
                        }else{
                            ring.attr("transform", options.clockwise ? "" : "scale(-1, 1) translate("+ (-diameter) +" 0)");
                        }

                        background.attr({
                            "cx":           radius,
                            "cy":           radius,
                            "r":            backgroundSize >= 0 ? backgroundSize : 0
                        }).css({
                            "stroke":       options.bgcolor,
                            "stroke-width": stroke
                        });
                    };

                    var renderState = function (newValue, oldValue){
                        if(!angular.isDefined(newValue)){
                            return false;
                        }

                        var max                 = options.max || 0;
                        var current             = newValue > max ? max : (newValue < 0 ? 0 : newValue);
                        var start               = (oldValue === current || oldValue < 0) ? 0 : (oldValue || 0); // fixes the initial animation
                        var changeInValue       = current - start;

                        var easingAnimation     = service.animations[options.animation];
                        var currentIteration    = 0;
                        var totalIterations     = parseInt(options.iterations);

                        var radius              = options.radius;
                        var circleSize          = radius - (options.stroke/2);
                        var elementSize         = radius*2;

                        (function animation(){
                            service.updateState(
                                easingAnimation(currentIteration, start, changeInValue, totalIterations),
                                max,
                                circleSize,
                                ring,
                                elementSize,
                                options.semi);

                            if(currentIteration < totalIterations){
                                $window.requestAnimationFrame(animation);
                                currentIteration++;
                            }
                        })();
                    };

                    scope.$watchCollection('[current, max, semi, rounded, clockwise, radius, color, bgcolor, stroke, iterations]', function(newValue, oldValue, scope){

                        // pretty much the same as angular.extend,
                        // but this skips undefined values and internal angular keys
                        angular.forEach(scope, function(value, key){
                            // note the scope !== value is because `this` is part of the scope
                            if(key.indexOf('$') && scope !== value && angular.isDefined(value)){
                                options[key] = value;
                            }
                        });

                        renderCircle();
                        renderState(newValue[0], oldValue[0]);
                    });
                },
                template:[
                    '<svg class="round-progress" xmlns="http://www.w3.org/2000/svg">',
                        '<circle fill="none"/>',
                        '<path fill="none"/>',
                        '<g ng-transclude></g>',
                    '</svg>'
                ].join('\n')
            });

        }]);
