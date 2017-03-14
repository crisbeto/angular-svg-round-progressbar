import * as child_process from 'child_process';
import {join} from 'path';

const resolveBin = require('resolve-bin');

function runCompiler(source: string, name: string, executable: string): Promise<number> {
  return new Promise((resolve, reject) => {
    resolveBin(name, { executable: executable }, (err: Error, bin: string) => {
      const childProcess = child_process.spawn('node', [bin, '-p', join(source, 'tsconfig.json')]);

      childProcess.stdout.on('data', (data: string) => process.stdout.write(data));
      childProcess.stderr.on('data', (data: string) => process.stderr.write(data));
      childProcess.on('close', (code: number) => code === 0 ? resolve(code) : reject(code));
    });
  });
}

// Compiles TypeScript files using NGC.
export function ngc(source: string) {
  return (done: any) => {
    runCompiler(source, '@angular/compiler-cli', 'ngc').then(done, done);
  };
}

// Compiles TypeScript files using TSC.
export function tsc(source: string) {
  return (done: any) => {
    runCompiler(source, 'typescript', 'tsc').then(done, done);
  };
}
