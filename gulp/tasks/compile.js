const childProcess = require('child_process');
const path = require('path');
const resolveBin = require('resolve-bin');

function runCompiler(source, name, executable) {
  return new Promise((resolve, reject) => {
    resolveBin(name, { executable: executable }, (err, bin) => {
      const tsconfig = path.join(source, 'tsconfig.json');
      const process = childProcess.spawn('node', [bin, '-p', tsconfig]);

      process.stdout.on('data', data => process.stdout.write(data));
      process.stderr.on('data', data => process.stderr.write(data));
      process.on('close', code => code === 0 ? resolve(code) : reject(code));
    });
  });
}

// Compiles TypeScript files using NGC.
module.exports.ngc = source => {
  return done => {
    runCompiler(source, '@angular/compiler-cli', 'ngc').then(done, done);
  };
};

// Compiles TypeScript files using TSC.
module.exports.tsc = source => {
  return done => {
    runCompiler(source, 'typescript', 'tsc').then(done, done);
  };
}
