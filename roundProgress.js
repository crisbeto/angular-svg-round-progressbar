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
            
            var updateState = function(value, total, R, ring) {
                if(value >= 0){
                    var value = value >= total ? total - 0.00001 : value,
                    alpha = 360 / total * value,
                    a = (90 - alpha) * Math.PI / 180,
                    x = 300 + R * Math.cos(a),
                    y = 300 - R * Math.sin(a),
                    path,
                    center = alpha > 180 ? 1 : 0;
                            
                    if (total === value) {
                        path = "M" + 300 + "," + (300 - R) + " A" + R + "," + R + "," + 0 + "," + 1 + "," + 1 + "," + 300 + "," + 300 - R;
                    }else{
                        path = "M"+ 300 + "," + (300 - R) + " A" + R + "," + R + "," + 0 + "," + center + "," + 1 + "," + x + "," + y;
                    };
                    
                    ring.attr('d', path);
                }
            },
            easeOutCubic = function(currentIteration, startValue, changeInValue, totalIterations) {
                // credits to http://www.kirupa.com/forum/showthread.php?378287-Robert-Penner-s-Easing-Equations-in-Pure-JS-(no-jQuery)
                return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
            };  
        
            return {
                restrict:'EA',
                scope:{
                    current:    "=",
                    max:        "=",
                    radius:     "@",
                    color:      "@",
                    bgcolor:    "@",
                    stroke:     "@"
                },
                link: function (scope, element, attrs) {
                    var ring    = element.find('path'),
                    size        = scope.radius*2 + parseInt(scope.stroke)*2,
                    circleSize  = -((300 - scope.radius) - scope.stroke);

                    scope.$watchCollection('[radius, color, bgcolor, stroke]', function(newValue, oldValue){
                        if(newValue){
                            var newRadius   = newValue[0],
                            newStroke       = parseInt(newValue[3]);

                            size            = newRadius*2 + newStroke*2;
                            circleSize      = -((300 - newRadius) - newStroke);

                            element.attr({
                                width: size,
                                height: size
                            });
                            
                            // centers the ring inside the svg element
                            ring.attr('transform', 'translate('+ circleSize +','+ circleSize +')');
                        };
                    });

                    // watch for changes and draw the progress
                    scope.$watchCollection('[current, max, radius]', function (newValue, oldValue){
                        var max             = newValue[1],
                        newCurrent          = newValue[0],
                        oldCurrent          = oldValue[0],
                        newRadius           = newValue[2];

                        // limit the current value so we dont get any crazy results
                        if(newCurrent < 0){
                            scope.current = 0;
                        };

                        if(newCurrent > max){
                            scope.current = max;
                        };

                        var start           = oldCurrent === newCurrent ? 0 : (oldCurrent || 0), // fixes the initial animation
                        val                 = newCurrent - start,
                        currentIteration    = 0,
                        totalIterations     = 50;

                        (function animation(){
                            if(currentIteration <= totalIterations){

                                updateState(
                                    easeOutCubic(currentIteration, start, val, totalIterations), 
                                    max, 
                                    newRadius, 
                                    ring
                                );

                                requestAnimationFrame(animation);
                                currentIteration++;
                            };
                        })();
                    });
                },
                replace:true,
                template:'\
                <svg class="round-progress" xmlns="http://www.w3.org/2000/svg">\
                    <circle ng-attr-cx="{{ radius }}" ng-attr-cy="{{ radius }}" ng-attr-transform="translate({{ stroke }}, {{ stroke }})" ng-attr-r="{{ radius }}" fill="none" stroke="{{ bgcolor }}" stroke-width="{{ stroke }}"/>\
                    <path fill="none" stroke="{{ color }}" stroke-width="{{ stroke }}" />\
                </svg>'
            };
        }]);
