'use strict';

angular.module('angular-svg-round-progressbar', []);
angular.module('angular-svg-round-progress', ['angular-svg-round-progressbar']).run(['$log', function($log){
    $log.warn('Hey there! In version 0.4.0 `angular-svg-round-progress` was renamed to `angular-svg-round-progressbar` in order to match the NPM and Bower package names. You\'re currently using a proxy module that will be gone on May 1st 2016. Please rename your module dependency accordingly.');
}]);
