'use strict';

angular.module('angular-svg-round-progress', [])
    .directive('roundProgress', ['$timeout', function($timeout){
            //credits to http://modernizr.com/ for the feature test
            if(!(!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect)){
                return {
                    //placeholder element to keep the structure
                    restrict: 'EA',
                    template:'<div class="round-progress"></div>',
                    replace: true
                }
            };

            // shim layer with setTimeout fallback
            // credit Erik Möller and http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
            (function() {
                var lastTime = 0;
                var vendors = ['webkit', 'moz'];
                for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
                    window.cancelAnimationFrame =
                      window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
                }

                if (!window.requestAnimationFrame){
                    window.requestAnimationFrame = function(callback, element) {
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
                        clearTimeout(id);
                    };
                }

            }());


            var polarToCartesian = function(centerX, centerY, radius, angleInDegrees) {
                var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

                return {
                    x: centerX + (radius * Math.cos(angleInRadians)),
                    y: centerY + (radius * Math.sin(angleInRadians))
                };
            }

            var updateState = function(value, total, R, ring, size, isSemicircle) {
                if(!size){
                    return;
                };

                // credit to http://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
                var value       = value >= total ? total - 0.00001 : value,
                    type        = isSemicircle ? 180 : 359.9999,
                    perc        = total === 0 ? 0 : (value / total) * type,
                    x           = size/2,
                    start       = polarToCartesian(x, x, R, perc), // in this case x and y are the same
                    end         = polarToCartesian(x, x, R, 0),
                    // arcSweep = endAngle - startAngle <= 180 ? "0" : "1",
                    arcSweep    = (perc <= 180 ? "0" : "1"),
                    d = [
                        "M", start.x, start.y,
                        "A", R, R, 0, arcSweep, 0, end.x, end.y
                    ].join(" ");

                ring.attr('d', d);
            };

            var easeOutCubic = function(currentIteration, startValue, changeInValue, totalIterations) {
                // credits to http://www.kirupa.com/forum/showthread.php?378287-Robert-Penner-s-Easing-Equations-in-Pure-JS-(no-jQuery)
                return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
            };

            return {
                restrict:'EA',
                scope:{
                    current:    "=",
                    max:        "=",
                    semi:       "=",
                    radius:     "@",
                    color:      "@",
                    bgcolor:    "@",
                    stroke:     "@",
                    iterations: "@"
                },
                link: function (scope, element, attrs) {
                    var ring        = element.find('path'),
                        background  = element.find('circle'),
                        size,
                        resetValue;

                    var renderCircle = function(){
                        $timeout(function(){
                            var isSemicircle = scope.semi,
                            radius           = scope.radius,
                            stroke           = scope.stroke;

                            size = radius*2 + parseInt(stroke)*2;

                            element.attr({
                                "width":        size,
                                "height":       isSemicircle ? size/2 : size
                            }).css({
                                "overflow": "hidden" // on some browsers the background overflows, if in semicircle mode
                            });

                            ring.attr({
                                "stroke":       scope.color,
                                "stroke-width": stroke,
                                "transform":    isSemicircle ? ('translate('+ 0 +','+ size +') rotate(-90)') : ''
                            });

                            background.attr({
                                "cx":           radius,
                                "cy":           radius,
                                "transform":    "translate("+ stroke +", "+ stroke +")",
                                "r":            radius,
                                "stroke":       scope.bgcolor,
                                "stroke-width": stroke
                            });

                            renderState(scope.current, scope.current);
                        });
                    };

                    var renderState = function (newValue, oldValue){
                        if(!angular.isDefined(newValue)){
                            return false;
                        };

                        if(newValue < 0){
                            resetValue = oldValue;
                            return scope.current = 0;
                        };

                        if(newValue > scope.max){
                            resetValue = oldValue;
                            return scope.current = scope.max;
                        };

                        var max             = scope.max,
                        radius              = scope.radius,
                        isSemicircle        = scope.semi,
                        start               = oldValue === newValue ? 0 : (oldValue || 0), // fixes the initial animation
                        val                 = newValue - start,
                        currentIteration    = 0,
                        totalIterations     = scope.iterations || 50;

                        if(angular.isNumber(resetValue)){
                            // the reset value fixes problems with animation, caused when limiting the scope.current
                            start       = resetValue;
                            val         = newValue - resetValue;
                            resetValue  = null;
                        };

                        (function animation(){
                            if(currentIteration <= totalIterations){
                                updateState(
                                    easeOutCubic(currentIteration, start, val, totalIterations),
                                    max,
                                    radius,
                                    ring,
                                    size,
                                    isSemicircle
                                );

                                requestAnimationFrame(animation);
                                currentIteration++;
                            };
                        })();
                    };

                    scope.$on('renderCircle', renderCircle);
                    scope.$watch('current', renderState);

                    renderCircle();
                },
                replace:true,
                template:'\
                <svg class="round-progress" xmlns="http://www.w3.org/2000/svg">\
                    <circle fill="none"/>\
                    <path fill="none" />\
                </svg>'
            };
        }]);
