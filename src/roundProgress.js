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
                    responsive:     "=",
                    radius:         "@",
                    color:          "@",
                    bgcolor:        "@",
                    stroke:         "@",
                    duration:       "@",
                    animation:      "@"
                },
                link: function(scope, element){
                    var svg         = element.find('svg').eq(0);
                    var ring        = svg.find('path').eq(0);
                    var background  = svg.find('circle').eq(0);
                    var options     = angular.copy(roundProgressConfig);
                    var lastAnimationId;

                    var renderCircle = function(){
                        var isSemicircle     = options.semi;
                        var responsive       = options.responsive;
                        var radius           = parseInt(options.radius) || 0;
                        var stroke           = parseInt(options.stroke);
                        var diameter         = radius*2;
                        var backgroundSize   = radius - (stroke/2);

                        svg.css({
                            "top":          0,
                            "left":         0,
                            "position":     responsive ? "absolute" : "static",
                            "width":        responsive ? "100%" : (diameter + "px"),
                            "height":       responsive ? "100%" : (isSemicircle ? radius : diameter) + "px",
                            "overflow":     "hidden" // on some browsers the background overflows, if in semicircle mode
                        }).attr({
                            viewBox:        "0 0 " + diameter + " " + (isSemicircle ? radius : diameter)
                        });

                        element.css({
                            "width":            responsive ? "100%" : "auto",
                            "position":         "relative",
                            "padding-bottom":   responsive ? (isSemicircle ? "50%" : "100%") : 0
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

                    var renderState = function(newValue, oldValue){
                        var max                 = service.toNumber(options.max || 0);
                        var end                 = newValue > max ? max : (newValue < 0 || !newValue ? 0 : newValue);
                        var start               = (oldValue === end || oldValue < 0) ? 0 : (oldValue || 0); // fixes the initial animation
                        var changeInValue       = end - start;

                        var easingAnimation     = service.animations[options.animation];
                        var startTime           = new Date();
                        var duration            = parseInt(options.duration);

                        var radius              = options.radius;
                        var circleSize          = radius - (options.stroke/2);
                        var elementSize         = radius*2;

                        $window.cancelAnimationFrame(lastAnimationId);

                        // below 25ms stuff starts to break
                        if(duration > 25){
                            (function animation(){
                                var currentTime = new Date() - startTime;

                                service.updateState(
                                    easingAnimation(currentTime, start, changeInValue, duration),
                                    max,
                                    circleSize,
                                    ring,
                                    elementSize,
                                    options.semi);

                                if(currentTime < duration){
                                    lastAnimationId = $window.requestAnimationFrame(animation);
                                }
                            })();
                        }else{
                            service.updateState(end, max, circleSize, ring, elementSize, options.semi);
                        }
                    };

                    scope.$watchCollection('[current, max, semi, rounded, clockwise, radius, color, bgcolor, stroke, duration, responsive]', function(newValue, oldValue, scope){

                        // pretty much the same as angular.extend,
                        // but this skips undefined values and internal angular keys
                        angular.forEach(scope, function(value, key){
                            // note the scope !== value is because `this` is part of the scope
                            if(key.indexOf('$') && scope !== value && angular.isDefined(value)){
                                options[key] = value;
                            }
                        });

                        renderCircle();
                        renderState(service.toNumber(newValue[0]), service.toNumber(oldValue[0]));
                    });
                },
                template:[
                    '<div class="round-progress-wrapper">',
                        '<svg class="round-progress" xmlns="http://www.w3.org/2000/svg">',
                            '<circle fill="none"/>',
                            '<path fill="none"/>',
                            '<g ng-transclude></g>',
                        '</svg>',
                    '</div>'
                ].join('\n')
            });

        }]);
