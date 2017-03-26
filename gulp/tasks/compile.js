const spawn = require('child_process').spawn;
const path = require('path');
const resolveBin = require('resolve-bin');

function runCompiler(source, name, executable, config) {
  return new Promise((resolve, reject) => {
    resolveBin(name, {executable}, (err, bin) => {
      const tsconfig = path.join(source, 'tsconfig.json');
      const extras = config ? Object.keys(config).reduce((accumulator, key) => {
        return accumulator.concat(key, config[key])
      }, []) : [];

      const childProcess = spawn('node', [bin, '-p', tsconfig].concat(extras));

      childProcess.stdout.on('data', data => process.stdout.write(data));
      childProcess.stderr.on('data', data => process.stderr.write(data));
      childProcess.on('close', code => code === 0 ? resolve(code) : reject(code));
    });
  });
}

// Compiles TypeScript files using the Angular compiler.
module.exports.ngc = (source, overrides) => {
  return done => {
    runCompiler(source, '@angular/compiler-cli', 'ngc', overrides).then(done, done);
  };
};

// Compiles TypeScript files using the TypeScript compiler.
module.exports.tsc = (source, overrides) => {
  return done => {
    runCompiler(source, 'typescript', 'tsc', overrides).then(done, done);
  };
};
