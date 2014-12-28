'use strict';

angular.module('angular-svg-round-progress')
    .directive('roundProgress', ['$timeout', 'roundProgressService', function($timeout, service){

            if(!service.isSupported){
                return {
                    // placeholder element to keep the structure
                    restrict: 'EA',
                    template:'<div class="round-progress"></div>',
                    replace: true
                };
            };

            return {
                restrict:           "EA",
                scope:{
                    current:        "=",
                    max:            "=",
                    semi:           "=",
                    radius:         "@",
                    color:          "@",
                    bgcolor:        "@",
                    stroke:         "@",
                    iterations:     "@",
                    animation:      "@"
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
                        easingAnimation     = service.animations[scope.animation || 'easeOutCubic'],
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
                            service.updateState(
                                easingAnimation(currentIteration, start, val, totalIterations),
                                max,
                                radius,
                                ring,
                                size,
                                isSemicircle);

                            if(currentIteration < totalIterations){
                                requestAnimationFrame(animation);
                                currentIteration++;
                            };
                        })();
                    };

                    scope.$watchCollection('[current, max, semi, radius, color, bgcolor, stroke, iterations]', function(newValue, oldValue){
                        renderCircle();
                        renderState(newValue[0], oldValue[0]);
                    });
                },
                replace:true,
                template:[
                    '<svg class="round-progress" xmlns="http://www.w3.org/2000/svg">',
                        '<circle fill="none"/>',
                        '<path fill="none" />',
                    '</svg>'
                ].join('\n')
            };
        }]);
