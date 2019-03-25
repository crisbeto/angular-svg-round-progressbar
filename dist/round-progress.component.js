"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var round_progress_service_1 = require("./round-progress.service");
var round_progress_config_1 = require("./round-progress.config");
var round_progress_ease_1 = require("./round-progress.ease");
var RoundProgressComponent = /** @class */ (function () {
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
        this.onRender = new core_1.EventEmitter();
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
        core_1.ViewChild('path'),
        __metadata("design:type", Object)
    ], RoundProgressComponent.prototype, "_path", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "current", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "max", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "radius", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RoundProgressComponent.prototype, "animation", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "animationDelay", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "duration", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], RoundProgressComponent.prototype, "stroke", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RoundProgressComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], RoundProgressComponent.prototype, "background", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "responsive", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "clockwise", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "semicircle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], RoundProgressComponent.prototype, "rounded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], RoundProgressComponent.prototype, "onRender", void 0);
    RoundProgressComponent = __decorate([
        core_1.Component({
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
        __param(2, core_1.Inject(round_progress_config_1.ROUND_PROGRESS_DEFAULTS)),
        __metadata("design:paramtypes", [round_progress_service_1.RoundProgressService,
            round_progress_ease_1.RoundProgressEase, Object, core_1.NgZone,
            core_1.Renderer])
    ], RoundProgressComponent);
    return RoundProgressComponent;
}());
exports.RoundProgressComponent = RoundProgressComponent;
//# sourceMappingURL=round-progress.component.js.map