System.config({
  map: {
    'rxjs': 'vendor/rxjs',
    '@angular/core': 'vendor/@angular/core/bundles/core.umd.js',
    '@angular/common': 'vendor/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'vendor/@angular/compiler/bundles/compiler.umd.js',
    '@angular/forms': 'vendor/@angular/forms/bundles/forms.umd.js',
    '@angular/platform-browser': 'vendor/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic':
      'vendor/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    'main': 'dist/main.js',
    'round-progress': 'round-progress/round-progress.js'
  },
  packages: {
    'rxjs': { main: 'index' },
    '.': { defaultExtension: 'js' }
  }
});
