"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
exports.ROUND_PROGRESS_DEFAULTS = new core_1.InjectionToken('ROUND_PROGRESS_DEFAULTS');
exports.ROUND_PROGRESS_DEFAULTS_PROVIDER = {
    provide: exports.ROUND_PROGRESS_DEFAULTS,
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
};
//# sourceMappingURL=round-progress.config.js.map