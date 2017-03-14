import * as child_process from 'child_process';

const resolveBin = require('resolve-bin');

// Compiles TypeScript files.
export default function compileTs(source: string, target: string, overrides?: any,
  tsConfig = './tsconfig.json') {

  return (done: any) => {
    resolveBin('@angular/compiler-cli', { executable: 'ngc' }, (err: Error, ngc: string) => {
      const childProcess = child_process.spawn('node', [ngc, '-p', tsConfig]);

      childProcess.stdout.on('data', (data: string) => process.stdout.write(data));
      childProcess.stderr.on('data', (data: string) => process.stderr.write(data));

      childProcess.on('close', (code: number) => {
        done(code === 0 ? code : 'Process failed with code ' + code);
      });
    });
  };
}
