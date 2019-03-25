var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
System.register("round-progress.service", ["@angular/core", "@angular/platform-browser"], function (exports_1, context_1) {
    "use strict";
    var core_1, platform_browser_1, DEGREE_IN_RADIANS, RoundProgressService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }
        ],
        execute: function () {
            DEGREE_IN_RADIANS = Math.PI / 180;
            RoundProgressService = /** @class */ (function () {
                function RoundProgressService(document) {
                    this.supportsSvg = !!(document &&
                        document.createElementNS &&
                        document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
                    this._base = document && document.head.querySelector('base');
                    this._hasPerf = typeof window !== 'undefined' &&
                        window.performance &&
                        window.performance.now &&
                        typeof window.performance.now() === 'number';
                }
                /**
                 * Resolves a SVG color against the page's `base` tag.
                 */
                RoundProgressService.prototype.resolveColor = function (color) {
                    if (this._base && this._base.href) {
                        var hashIndex = color.indexOf('#');
                        if (hashIndex > -1 && color.indexOf('url') > -1) {
                            return color.slice(0, hashIndex) + location.href + color.slice(hashIndex);
                        }
                    }
                    return color;
                };
                /**
                 * Generates a timestamp.
                 */
                RoundProgressService.prototype.getTimestamp = function () {
                    return this._hasPerf ? window.performance.now() : Date.now();
                };
                /**
                 * Generates the value for an SVG arc.
                 * @param current       Current value.
                 * @param total         Maximum value.
                 * @param pathRadius    Radius of the SVG path.
                 * @param elementRadius Radius of the SVG container.
                 * @param isSemicircle  Whether the element should be a semicircle.
                 */
                RoundProgressService.prototype.getArc = function (current, total, pathRadius, elementRadius, isSemicircle) {
                    if (isSemicircle === void 0) { isSemicircle = false; }
                    var value = Math.max(0, Math.min(current || 0, total));
                    var maxAngle = isSemicircle ? 180 : 359.9999;
                    var percentage = total === 0 ? maxAngle : (value / total) * maxAngle;
                    var start = this._polarToCartesian(elementRadius, pathRadius, percentage);
                    var end = this._polarToCartesian(elementRadius, pathRadius, 0);
                    var arcSweep = (percentage <= 180 ? 0 : 1);
                    return "M " + start + " A " + pathRadius + " " + pathRadius + " 0 " + arcSweep + " 0 " + end;
                };
                ;
                /**
                 * Converts polar cooradinates to Cartesian.
                 * @param elementRadius  Radius of the wrapper element.
                 * @param pathRadius     Radius of the path being described.
                 * @param angleInDegrees Degree to be converted.
                 */
                RoundProgressService.prototype._polarToCartesian = function (elementRadius, pathRadius, angleInDegrees) {
                    var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
                    var x = elementRadius + (pathRadius * Math.cos(angleInRadians));
                    var y = elementRadius + (pathRadius * Math.sin(angleInRadians));
                    return x + ' ' + y;
                };
                RoundProgressService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Optional()), __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
                    __metadata("design:paramtypes", [Object])
                ], RoundProgressService);
                return RoundProgressService;
            }());
            exports_1("RoundProgressService", RoundProgressService);
            ;
        }
    };
});
System.register("round-progress.config", ["@angular/core"], function (exports_2, context_2) {
    "use strict";
    var core_2, ROUND_PROGRESS_DEFAULTS, ROUND_PROGRESS_DEFAULTS_PROVIDER;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (core_2_1) {
                core_2 = core_2_1;
            }
        ],
        execute: function () {
            exports_2("ROUND_PROGRESS_DEFAULTS", ROUND_PROGRESS_DEFAULTS = new core_2.InjectionToken('ROUND_PROGRESS_DEFAULTS'));
            exports_2("ROUND_PROGRESS_DEFAULTS_PROVIDER", ROUND_PROGRESS_DEFAULTS_PROVIDER = {
                provide: ROUND_PROGRESS_DEFAULTS,
                useValue: {
                    radius: 125,
                    animation: 'easeOutCubic',
                    animationDelay: null,
                    duration: 500,
                    stroke: 15,
                    color: '#45CCCE',
                    background: '#EAEAEA',
                    responsive: false,
                    clockwise: true,
                    semicircle: false,
                    rounded: false
                }
            });
        }
    };
});
System.register("round-progress.ease", ["@angular/core"], function (exports_3, context_3) {
    "use strict";
    var core_3, RoundProgressEase;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (core_3_1) {
                core_3 = core_3_1;
            }
        ],
        execute: function () {
            RoundProgressEase = /** @class */ (function () {
                function RoundProgressEase() {
                }
                // t: current time (or position) of the neonate. This can be seconds or frames, steps,
                // seconds, ms, whatever – as long as the unit is the same as is used for the total time.
                // b: beginning value of the property.
                // c: change between the beginning and destination value of the property.
                // d: total time of the neonate.
                RoundProgressEase.prototype.linearEase = function (t, b, c, d) {
                    return c * t / d + b;
                };
                ;
                RoundProgressEase.prototype.easeInQuad = function (t, b, c, d) {
                    return c * (t /= d) * t + b;
                };
                ;
                RoundProgressEase.prototype.easeOutQuad = function (t, b, c, d) {
                    return -c * (t /= d) * (t - 2) + b;
                };
                ;
                RoundProgressEase.prototype.easeInOutQuad = function (t, b, c, d) {
                    if ((t /= d / 2) < 1) {
                        return c / 2 * t * t + b;
                    }
                    return -c / 2 * ((--t) * (t - 2) - 1) + b;
                };
                ;
                RoundProgressEase.prototype.easeInCubic = function (t, b, c, d) {
                    return c * (t /= d) * t * t + b;
                };
                ;
                RoundProgressEase.prototype.easeOutCubic = function (t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t + 1) + b;
                };
                ;
                RoundProgressEase.prototype.easeInOutCubic = function (t, b, c, d) {
                    if ((t /= d / 2) < 1) {
                        return c / 2 * t * t * t + b;
                    }
                    return c / 2 * ((t -= 2) * t * t + 2) + b;
                };
                ;
                RoundProgressEase.prototype.easeInQuart = function (t, b, c, d) {
                    return c * (t /= d) * t * t * t + b;
                };
                ;
                RoundProgressEase.prototype.easeOutQuart = function (t, b, c, d) {
                    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
                };
                ;
                RoundProgressEase.prototype.easeInOutQuart = function (t, b, c, d) {
                    if ((t /= d / 2) < 1) {
                        return c / 2 * t * t * t * t + b;
                    }
                    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                };
                ;
                RoundProgressEase.prototype.easeInQuint = function (t, b, c, d) {
                    return c * (t /= d) * t * t * t * t + b;
                };
                ;
                RoundProgressEase.prototype.easeOutQuint = function (t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                };
                ;
                RoundProgressEase.prototype.easeInOutQuint = function (t, b, c, d) {
                    if ((t /= d / 2) < 1) {
                        return c / 2 * t * t * t * t * t + b;
                    }
                    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
                };
                ;
                RoundProgressEase.prototype.easeInSine = function (t, b, c, d) {
                    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
                };
                ;
                RoundProgressEase.prototype.easeOutSine = function (t, b, c, d) {
                    return c * Math.sin(t / d * (Math.PI / 2)) + b;
                };
                ;
                RoundProgressEase.prototype.easeInOutSine = function (t, b, c, d) {
                    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
                };
                ;
                RoundProgressEase.prototype.easeInExpo = function (t, b, c, d) {
                    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
                };
                ;
                RoundProgressEase.prototype.easeOutExpo = function (t, b, c, d) {
                    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
                };
                ;
                RoundProgressEase.prototype.easeInOutExpo = function (t, b, c, d) {
                    if (t == 0) {
                        return b;
                    }
                    ;
                    if (t == d) {
                        return b + c;
                    }
                    if ((t /= d / 2) < 1) {
                        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                    }
                    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
                };
                ;
                RoundProgressEase.prototype.easeInCirc = function (t, b, c, d) {
                    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
                };
                ;
                RoundProgressEase.prototype.easeOutCirc = function (t, b, c, d) {
                    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
                };
                ;
                RoundProgressEase.prototype.easeInOutCirc = function (t, b, c, d) {
                    if ((t /= d / 2) < 1) {
                        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                    }
                    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
                };
                ;
                RoundProgressEase.prototype.easeInElastic = function (t, b, c, d) {
                    var s = 1.70158;
                    var p = d * 0.3;
                    var a = c;
                    if (t == 0) {
                        return b;
                    }
                    if ((t /= d) == 1) {
                        return b + c;
                    }
                    if (a < Math.abs(c)) {
                        a = c;
                        s = p / 4;
                    }
                    else {
                        s = p / (2 * Math.PI) * Math.asin(c / a);
                    }
                    return -(a * Math.pow(2, 10 * (t--)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                };
                ;
                RoundProgressEase.prototype.easeOutElastic = function (t, b, c, d) {
                    var s = 1.70158;
                    var p = d * 0.3;
                    var a = c;
                    if (t == 0) {
                        return b;
                    }
                    if ((t /= d) == 1) {
                        return b + c;
                    }
                    if (a < Math.abs(c)) {
                        a = c;
                        s = p / 4;
                    }
                    else {
                        s = p / (2 * Math.PI) * Math.asin(c / a);
                    }
                    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
                };
                ;
                RoundProgressEase.prototype.easeInOutElastic = function (t, b, c, d) {
                    var s = 1.70158;
                    var p = d * (0.3 * 1.5);
                    var a = c;
                    if (t == 0) {
                        return b;
                    }
                    if ((t /= d / 2) == 2) {
                        return b + c;
                    }
                    if (a < Math.abs(c)) {
                        a = c;
                        s = p / 4;
                    }
                    else {
                        s = p / (2 * Math.PI) * Math.asin(c / a);
                    }
                    if (t < 1) {
                        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
                            Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                    }
                    return a * Math.pow(2, -10 * (t -= 1)) *
                        Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
                };
                ;
                RoundProgressEase.prototype.easeInBack = function (t, b, c, d, s) {
                    if (s === void 0) { s = 1.70158; }
                    return c * (t /= d) * t * ((s + 1) * t - s) + b;
                };
                ;
                RoundProgressEase.prototype.easeOutBack = function (t, b, c, d, s) {
                    if (s === void 0) { s = 1.70158; }
                    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
                };
                ;
                RoundProgressEase.prototype.easeInOutBack = function (t, b, c, d, s) {
                    if (s === void 0) { s = 1.70158; }
                    if ((t /= d / 2) < 1) {
                        return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
                    }
                    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
                };
                ;
                RoundProgressEase.prototype.easeInBounce = function (t, b, c, d) {
                    return c - this.easeOutBounce(d - t, 0, c, d) + b;
                };
                ;
                RoundProgressEase.prototype.easeOutBounce = function (t, b, c, d) {
                    if ((t /= d) < (1 / 2.75)) {
                        return c * (7.5625 * t * t) + b;
                    }
                    else if (t < (2 / 2.75)) {
                        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
                    }
                    else if (t < (2.5 / 2.75)) {
                        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
                    }
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
                };
                ;
                RoundProgressEase.prototype.easeInOutBounce = function (t, b, c, d) {
                    if (t < d / 2) {
                        return this.easeInBounce(t * 2, 0, c, d) * 0.5 + b;
                    }
                    return this.easeOutBounce(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
                };
                ;
                RoundProgressEase = __decorate([
                    core_3.Injectable()
                ], RoundProgressEase);
                return RoundProgressEase;
            }());
            exports_3("RoundProgressEase", RoundProgressEase);
            /**
             * TERMS OF USE - EASING EQUATIONS
             * Open source under the BSD License.
            
             * Copyright © 2001 Robert Penner
             * All rights reserved.
             * Redistribution and use in source and binary forms, with or without modification, are permitted
             * provided that the following conditions are met:
            
             * Redistributions of source code must retain the above copyright notice, this list of conditions
             * and the following disclaimer.
             *
             * Redistributions in binary form must reproduce the above copyright notice, this list of conditions
             * and the following disclaimer in the documentation and/or other materials provided with the
             * distribution.
             *
             * Neither the name of the author nor the names of contributors may be used to endorse or promote
             * products derived from this software without specific prior written permission.
             *
             * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
             * IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
             * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
             * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
             * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
             * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
             * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
             * ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
             */
        }
    };
});
System.register("round-progress.component", ["@angular/core", "round-progress.service", "round-progress.config", "round-progress.ease"], function (exports_4, context_4) {
    "use strict";
    var core_4, round_progress_service_1, round_progress_config_1, round_progress_ease_1, RoundProgressComponent;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (round_progress_service_1_1) {
                round_progress_service_1 = round_progress_service_1_1;
            },
            function (round_progress_config_1_1) {
                round_progress_config_1 = round_progress_config_1_1;
            },
            function (round_progress_ease_1_1) {
                round_progress_ease_1 = round_progress_ease_1_1;
            }
        ],
        execute: function () {
            RoundProgressComponent = /** @class */ (function () {
                function RoundProgressComponent(_service, _easing, _defaults, _ngZone, _renderer) {
                    this._service = _service;
                    this._easing = _easing;
                    this._defaults = _defaults;
                    this._ngZone = _ngZone;
                    this._renderer = _renderer;
                    this._lastAnimationId = 0;
                    this.radius = this._defaults.radius;
                    this.animation = this._defaults.animation;
                    this.animationDelay = this._defaults.animationDelay;
                    this.duration = this._defaults.duration;
                    this.stroke = this._defaults.stroke;
                    this.color = this._defaults.color;
                    this.background = this._defaults.background;
                    this.responsive = this._defaults.responsive;
                    this.clockwise = this._defaults.clockwise;
                    this.semicircle = this._defaults.semicircle;
                    this.rounded = this._defaults.rounded;
                    this.onRender = new core_4.EventEmitter();
                }
                /** Animates a change in the current value. */
                RoundProgressComponent.prototype._animateChange = function (from, to) {
                    var _this = this;
                    if (typeof from !== 'number') {
                        from = 0;
                    }
                    to = this._clamp(to);
                    from = this._clamp(from);
                    var self = this;
                    var changeInValue = to - from;
                    var duration = self.duration;
                    // Avoid firing change detection for each of the animation frames.
                    self._ngZone.runOutsideAngular(function () {
                        var start = function () {
                            var startTime = self._service.getTimestamp();
                            var id = ++self._lastAnimationId;
                            requestAnimationFrame(function animation() {
                                var currentTime = Math.min(self._service.getTimestamp() - startTime, duration);
                                var value = self._easing[self.animation](currentTime, from, changeInValue, duration);
                                self._setPath(value);
                                self.onRender.emit(value);
                                if (id === self._lastAnimationId && currentTime < duration) {
                                    requestAnimationFrame(animation);
                                }
                            });
                        };
                        if (_this.animationDelay > 0) {
                            setTimeout(start, _this.animationDelay);
                        }
                        else {
                            start();
                        }
                    });
                };
                /** Sets the path dimensions. */
                RoundProgressComponent.prototype._setPath = function (value) {
                    if (this._path) {
                        this._renderer.setElementAttribute(this._path.nativeElement, 'd', this._service.getArc(value, this.max, this.radius - this.stroke / 2, this.radius, this.semicircle));
                    }
                };
                /** Clamps a value between the maximum and 0. */
                RoundProgressComponent.prototype._clamp = function (value) {
                    return Math.max(0, Math.min(value || 0, this.max));
                };
                /** Determines the SVG transforms for the <path> node. */
                RoundProgressComponent.prototype.getPathTransform = function () {
                    var diameter = this._diameter;
                    if (this.semicircle) {
                        return this.clockwise ?
                            "translate(0, " + diameter + ") rotate(-90)" :
                            "translate(" + (diameter + ',' + diameter) + ") rotate(90) scale(-1, 1)";
                    }
                    else if (!this.clockwise) {
                        return "scale(-1, 1) translate(-" + diameter + " 0)";
                    }
                };
                /** Resolves a color through the service. */
                RoundProgressComponent.prototype.resolveColor = function (color) {
                    return this._service.resolveColor(color);
                };
                /** Change detection callback. */
                RoundProgressComponent.prototype.ngOnChanges = function (changes) {
                    if (changes.current) {
                        this._animateChange(changes.current.previousValue, changes.current.currentValue);
                    }
                    else {
                        this._setPath(this.current);
                    }
                };
                Object.defineProperty(RoundProgressComponent.prototype, "_diameter", {
                    /** Diameter of the circle. */
                    get: function () {
                        return this.radius * 2;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RoundProgressComponent.prototype, "_elementHeight", {
                    /** The CSS height of the wrapper element. */
                    get: function () {
                        if (!this.responsive) {
                            return (this.semicircle ? this.radius : this._diameter) + 'px';
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RoundProgressComponent.prototype, "_viewBox", {
                    /** Viewbox for the SVG element. */
                    get: function () {
                        var diameter = this._diameter;
                        return "0 0 " + diameter + " " + (this.semicircle ? this.radius : diameter);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(RoundProgressComponent.prototype, "_paddingBottom", {
                    /** Bottom padding for the wrapper element. */
                    get: function () {
                        if (this.responsive) {
                            return this.semicircle ? '50%' : '100%';
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_4.ViewChild('path'),
                    __metadata("design:type", Object)
                ], RoundProgressComponent.prototype, "_path", void 0);
                __decorate([
                    core_4.Input(),
                    __metadata("design:type", Number)
                ], RoundProgressComponent.prototype, "current", void 0);
                __decorate([
                    core_4.Input(),
                    __metadata("design:type", Number)
                ], RoundProgressComponent.prototype, "max", void 0);
                __decorate([
                    core_4.Input(),
                    __metadata("design:type", Number)
                ], RoundProgressComponent.prototype, "radius", void 0);
                __decorate([
                    core_4.Input(),
                    __metadata("design:type", String)
                ], RoundProgressComponent.prototype, "animation", void 0);
                __decorate([
                    core_4.Input(),
                    __metadata("design:type", Number)
                ], RoundProgressComponent.prototype, "animationDelay", void 0);
                __decorate([
                    core_4.Input(),
                    __metadata("design:type", Number)
                ], RoundProgressComponent.prototype, "duration", void 0);
                __decorate([
                    core_4.Input(),
                    __metadata("design:type", Number)
                ], RoundProgressComponent.prototype, "stroke", void 0);
                __decorate([
                    core_4.Input(),
                    __metadata("design:type", String)
                ], RoundProgressComponent.prototype, "color", void 0);
                __decorate([
                    core_4.Input(),
                    __metadata("design:type", String)
                ], RoundProgressComponent.prototype, "background", void 0);
                __decorate([
                    core_4.Input(),
                    __metadata("design:type", Boolean)
                ], RoundProgressComponent.prototype, "responsive", void 0);
                __decorate([
                    core_4.Input(),
                    __metadata("design:type", Boolean)
                ], RoundProgressComponent.prototype, "clockwise", void 0);
                __decorate([
                    core_4.Input(),
                    __metadata("design:type", Boolean)
                ], RoundProgressComponent.prototype, "semicircle", void 0);
                __decorate([
                    core_4.Input(),
                    __metadata("design:type", Boolean)
                ], RoundProgressComponent.prototype, "rounded", void 0);
                __decorate([
                    core_4.Output(),
                    __metadata("design:type", core_4.EventEmitter)
                ], RoundProgressComponent.prototype, "onRender", void 0);
                RoundProgressComponent = __decorate([
                    core_4.Component({
                        selector: 'round-progress',
                        template: "\n    <svg xmlns=\"http://www.w3.org/2000/svg\" [attr.viewBox]=\"_viewBox\">\n      <circle\n        fill=\"none\"\n        [attr.cx]=\"radius\"\n        [attr.cy]=\"radius\"\n        [attr.r]=\"radius - stroke / 2\"\n        [style.stroke]=\"resolveColor(background)\"\n        [style.stroke-width]=\"stroke\"/>\n\n      <path\n        #path\n        fill=\"none\"\n        [style.stroke-width]=\"stroke\"\n        [style.stroke]=\"resolveColor(color)\"\n        [style.stroke-linecap]=\"rounded ? 'round' : ''\"\n        [attr.transform]=\"getPathTransform()\"/>\n    </svg>\n  ",
                        host: {
                            'role': 'progressbar',
                            '[attr.aria-valuemin]': 'current',
                            '[attr.aria-valuemax]': 'max',
                            '[style.width]': "responsive ? '' : _diameter + 'px'",
                            '[style.height]': '_elementHeight',
                            '[style.padding-bottom]': '_paddingBottom',
                            '[class.responsive]': 'responsive'
                        },
                        styles: [
                            ":host {\n      display: block;\n      position: relative;\n      overflow: hidden;\n    }",
                            ":host.responsive {\n      width: 100%;\n      padding-bottom: 100%;\n    }",
                            ":host.responsive > svg {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n    }"
                        ]
                    }),
                    __param(2, core_4.Inject(round_progress_config_1.ROUND_PROGRESS_DEFAULTS)),
                    __metadata("design:paramtypes", [round_progress_service_1.RoundProgressService,
                        round_progress_ease_1.RoundProgressEase, Object, core_4.NgZone,
                        core_4.Renderer])
                ], RoundProgressComponent);
                return RoundProgressComponent;
            }());
            exports_4("RoundProgressComponent", RoundProgressComponent);
        }
    };
});
System.register("index", ["@angular/core", "@angular/common", "round-progress.component", "round-progress.service", "round-progress.ease", "round-progress.config"], function (exports_5, context_5) {
    "use strict";
    var core_5, common_1, round_progress_component_1, round_progress_service_2, round_progress_ease_2, round_progress_config_2, RoundProgressModule;
    var __moduleName = context_5 && context_5.id;
    var exportedNames_1 = {
        "RoundProgressModule": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_5(exports);
    }
    return {
        setters: [
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (round_progress_component_1_1) {
                round_progress_component_1 = round_progress_component_1_1;
                exportStar_1(round_progress_component_1_1);
            },
            function (round_progress_service_2_1) {
                round_progress_service_2 = round_progress_service_2_1;
                exportStar_1(round_progress_service_2_1);
            },
            function (round_progress_ease_2_1) {
                round_progress_ease_2 = round_progress_ease_2_1;
                exportStar_1(round_progress_ease_2_1);
            },
            function (round_progress_config_2_1) {
                round_progress_config_2 = round_progress_config_2_1;
                exportStar_1(round_progress_config_2_1);
            }
        ],
        execute: function () {
            RoundProgressModule = /** @class */ (function () {
                function RoundProgressModule() {
                }
                RoundProgressModule = __decorate([
                    core_5.NgModule({
                        imports: [common_1.CommonModule],
                        declarations: [round_progress_component_1.RoundProgressComponent],
                        exports: [round_progress_component_1.RoundProgressComponent],
                        providers: [round_progress_service_2.RoundProgressService, round_progress_ease_2.RoundProgressEase, round_progress_config_2.ROUND_PROGRESS_DEFAULTS_PROVIDER]
                    })
                ], RoundProgressModule);
                return RoundProgressModule;
            }());
            exports_5("RoundProgressModule", RoundProgressModule);
            ;
        }
    };
});
//# sourceMappingURL=round-progress.umd.js.map