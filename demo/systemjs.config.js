System.config({
  map: {
    'rxjs': 'https://unpkg.com/rxjs',
    '@angular/core': 'http://unpkg.com/@angular/core/bundles/core.umd.js',
    '@angular/common': 'http://unpkg.com/@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'http://unpkg.com/@angular/compiler/bundles/compiler.umd.js',
    '@angular/forms': 'http://unpkg.com/@angular/forms/bundles/forms.umd.js',
    '@angular/platform-browser':
      'http://unpkg.com/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic':
      'http://unpkg.com/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    'main': 'dist/main.js',
    'round-progress': 'round-progress/round-progress.js'
  },
  packages: {
    'rxjs': { main: 'index' },
    '.': { defaultExtension: 'js' }
  }
});
