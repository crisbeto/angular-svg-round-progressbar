angular.module('angular-svg-round-progressbar').directive('roundProgress', ['$window', 'roundProgressService', 'roundProgressConfig', function($window, service, roundProgressConfig){
    var base = {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {
            current:        '=',
            max:            '=',
            semi:           '=',
            rounded:        '=',
            clockwise:      '=',
            responsive:     '=',
            onRender:       '=',
            radius:         '@',
            color:          '@',
            bgcolor:        '@',
            stroke:         '@',
            duration:       '@',
            animation:      '@',
            offset:         '@',
            animationDelay: '@'
        }
    };

    if(!service.isSupported){
        return angular.extend(base, {
            // placeholder element to keep the structure
            template: '<div class="round-progress" ng-transclude></div>'
        });
    }

    return angular.extend(base, {
        link: function(scope, element, attrs){
            var isNested    = !element.hasClass('round-progress-wrapper');
            var svg         = isNested ? element : element.find('svg').eq(0);
            var ring        = svg.find('path').eq(0);
            var background  = svg.find('circle').eq(0);
            var options     = angular.copy(roundProgressConfig);
            var lastAnimationId = 0;
            var lastTimeoutId;
            var parentChangedListener;

            scope.$$getRoundProgressOptions = function(){
                return options;
            };

            var renderCircle = function(){
                var isSemicircle     = options.semi;
                var responsive       = options.responsive;
                var radius           = +options.radius || 0;
                var stroke           = +options.stroke;
                var diameter         = radius*2;
                var backgroundSize   = radius - (stroke/2) - service.getOffset(scope, options);

                svg.css({
                    top:          0,
                    left:         0,
                    position:     responsive ? 'absolute' : 'static',
                    width:        responsive ? '100%' : (diameter + 'px'),
                    height:       responsive ? '100%' : (isSemicircle ? radius : diameter) + 'px',
                    overflow:     'hidden' // on some browsers the background overflows, if in semicircle mode
                });

                // when nested, the element shouldn't define its own viewBox
                if(!isNested){
                    // note that we can't use .attr, because if jQuery is loaded,
                    // it lowercases all attributes and viewBox is case-sensitive
                    svg[0].setAttribute('viewBox', '0 0 ' + diameter + ' ' + (isSemicircle ? radius : diameter));
                }

                element.css({
                    width:           responsive ? '100%' : 'auto',
                    position:        'relative',
                    paddingBottom:   responsive ? (isSemicircle ? '50%' : '100%') : 0
                });

                ring.css({
                    stroke:          service.resolveColor(options.color),
                    strokeWidth:     stroke,
                    strokeLinecap:   options.rounded ? 'round': 'butt'
                });

                if(isSemicircle){
                    ring.attr('transform', options.clockwise ? 'translate(0, ' + diameter + ') rotate(-90)' : 'translate(' + diameter + ', '+ diameter +') rotate(90) scale(-1, 1)');
                }else{
                    ring.attr('transform', options.clockwise ? '' : 'scale(-1, 1) translate(' + (-diameter) + ' 0)');
                }

                background.attr({
                    cx:           radius,
                    cy:           radius,
                    r:            backgroundSize >= 0 ? backgroundSize : 0
                }).css({
                    stroke:       service.resolveColor(options.bgcolor),
                    strokeWidth:  stroke
                });
            };

            var renderState = function(newValue, oldValue, preventAnimationOverride){
                var max                 = service.toNumber(options.max || 0);
                var end                 = newValue > 0 ? $window.Math.min(newValue, max) : 0;
                var start               = (oldValue === end || oldValue < 0) ? 0 : (oldValue || 0); // fixes the initial animation
                var changeInValue       = end - start;

                var easingAnimation     = service.animations[options.animation];
                var duration            = +options.duration || 0;
                var preventAnimation    = preventAnimationOverride || (newValue > max && oldValue > max) || (newValue < 0 && oldValue < 0) || duration < 25;

                var radius              = service.toNumber(options.radius);
                var circleSize          = radius - (options.stroke/2) - service.getOffset(scope, options);
                var isSemicircle        = options.semi;

                svg.attr({
                    'aria-valuemax': max,
                    'aria-valuenow': end
                });

                var doAnimation = function(){
                    // stops some expensive animating if the value is above the max or under 0
                    if(preventAnimation){
                        service.updateState(end, max, circleSize, ring, radius, isSemicircle);

                        if(options.onRender){
                            options.onRender(end, options, element);
                        }
                    }else{
                        var startTime = service.getTimestamp();
                        var id = ++lastAnimationId;

                        $window.requestAnimationFrame(function animation(){
                            var currentTime = $window.Math.min(service.getTimestamp() - startTime, duration);
                            var animateTo = easingAnimation(currentTime, start, changeInValue, duration);

                            service.updateState(animateTo, max, circleSize, ring, radius, isSemicircle);

                            if(options.onRender){
                                options.onRender(animateTo, options, element);
                            }

                            if(id === lastAnimationId && currentTime < duration){
                                $window.requestAnimationFrame(animation);
                            }
                        });
                    }
                };

                if(options.animationDelay > 0){
                    $window.clearTimeout(lastTimeoutId);
                    $window.setTimeout(doAnimation, options.animationDelay);
                }else{
                    doAnimation();
                }
            };

            var keys = Object.keys(base.scope).filter(function(key){
                return optionIsSpecified(key) && key !== 'current';
            });

            // properties that are used only for presentation
            scope.$watchGroup(keys, function(newValue){
                for(var i = 0; i < newValue.length; i++){
                    if(typeof newValue[i] !== 'undefined'){
                        options[keys[i]] = newValue[i];
                    }
                }

                renderCircle();
                scope.$broadcast('$parentOffsetChanged');

                // it doesn't have to listen for changes on the parent unless it inherits
                if(options.offset === 'inherit' && !parentChangedListener){
                    parentChangedListener = scope.$on('$parentOffsetChanged', function(){
                        renderState(scope.current, scope.current, true);
                        renderCircle();
                    });
                }else if(options.offset !== 'inherit' && parentChangedListener){
                    parentChangedListener();
                }
            });

            // properties that are used during animation. some of these overlap with
            // the ones that are used for presentation
            scope.$watchGroup([
                'current',
                'max',
                'radius',
                'stroke',
                'semi',
                'offset'
            ].filter(optionIsSpecified), function(newValue, oldValue){
                renderState(service.toNumber(newValue[0]), service.toNumber(oldValue[0]));
            });

            function optionIsSpecified(name) {
                return attrs.hasOwnProperty(name);
            }
        },
        template: function(element){
            var parent = element.parent();
            var directiveName = 'round-progress';
            var template = [
                '<svg class="'+ directiveName +'" xmlns="http://www.w3.org/2000/svg" role="progressbar" aria-valuemin="0">',
                    '<circle fill="none"/>',
                    '<path fill="none"/>',
                    '<g ng-transclude></g>',
                '</svg>'
            ];

            while(
                parent.length &&
                parent[0].nodeName.toLowerCase() !== directiveName &&
                typeof parent.attr(directiveName) === 'undefined'
            ){
                parent = parent.parent();
            }

            if(!parent || !parent.length){
                template.unshift('<div class="round-progress-wrapper">');
                template.push('</div>');
            }

            return template.join('\n');
        }
    });
}]);
