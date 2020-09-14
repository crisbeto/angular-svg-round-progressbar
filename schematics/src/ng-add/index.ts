import { chain, Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { createSourceFile, ScriptTarget, SourceFile } from 'typescript';
import { LIB_NAME } from '../schematics.consts';
import { addImportToModule, insertImport } from '../utils/ast-utils';
import { InsertChange } from '../utils/change';
import { findRootModule } from '../utils/find-module';
import { getProject } from '../utils/projects';
import { SchemaOptions } from './schema';

export function getModuleFile(host: Tree, options: SchemaOptions): SourceFile {
  const modulePath = options.module;

  if (!host.exists(modulePath)) {
    throw new SchematicsException(`File ${modulePath} does not exist.`);
  }

  const text = host.read(modulePath);
  if (text === null) {
    throw new SchematicsException(`File ${modulePath} does not exist.`);
  }
  const sourceText = text.toString('utf-8');

  return createSourceFile(modulePath, sourceText, ScriptTarget.Latest, true);
}

export function applyChanges(host: Tree, path: string, changes: InsertChange[]): Tree {
  const recorder = host.beginUpdate(path);

  for (const change of changes) {
    if (change instanceof InsertChange) {
      recorder.insertLeft(change.pos, change.toAdd);
    }
  }
  host.commitUpdate(recorder);

  return host;
}

export function addImportsToModuleFile(options: SchemaOptions, imports: string[], file = LIB_NAME): Rule {
  return (host) => {
    const module = getModuleFile(host, options);
    const importChanges = insertImport(module, options.module, imports.join(', '), file);

    return applyChanges(host, options.module, [importChanges] as InsertChange[]);
  };
}

export function addImportsToModuleDeclaration(options: SchemaOptions, imports: string[]): Rule {
  return (host) => {
    const module = getModuleFile(host, options);

    const importChanges = imports.map((imp) => addImportToModule(module, options.module, imp, LIB_NAME)[0]);
    return applyChanges(host, options.module, importChanges as InsertChange[]);
  };
}

export default function (options: SchemaOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    const project = getProject(host, options.project);
    const sourceRoot = (project && project.sourceRoot) || 'src';
    options.module = findRootModule(host, options.module, sourceRoot) as string;

    return chain([
      addImportsToModuleFile(options, ['RoundprogressModule']),
      addImportsToModuleDeclaration(options, ['RoundprogressModule']),
    ])(host, context);
  };
}
