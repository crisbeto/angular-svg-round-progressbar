const childProcess = require('child_process');
const path = require('path');
const resolveBin = require('resolve-bin');

function runCompiler(source, name, executable, config) {
  return new Promise((resolve, reject) => {
    resolveBin(name, {executable}, (err, bin) => {
      const tsconfig = path.join(source, 'tsconfig.json');
      const extras = config ? Object.keys(config).reduce((acc, key) => {
        return acc.concat(key, config[key])
      }, []) : [];

      const process = childProcess.spawn('node', [bin, '-p', tsconfig].concat(extras));

      process.stdout.on('data', data => process.stdout.write(data));
      process.stderr.on('data', data => process.stderr.write(data));
      process.on('close', code => code === 0 ? resolve(code) : reject(code));
    });
  });
}

// Compiles TypeScript files using NGC.
module.exports.ngc = (source, overrides) => {
  return done => {
    runCompiler(source, '@angular/compiler-cli', 'ngc', overrides).then(done, done);
  };
};

// Compiles TypeScript files using TSC.
module.exports.tsc = (source, overrides) => {
  return done => {
    runCompiler(source, 'typescript', 'tsc', overrides).then(done, done);
  };
}
