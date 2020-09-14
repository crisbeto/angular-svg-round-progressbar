import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { Schema as ApplicationOptions, Style } from '@schematics/angular/application/schema';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';

const workspaceOptions: WorkspaceOptions = Object.freeze({
  name: 'workspace',
  newProjectRoot: '',
  version: '10.0.0',
});

const defaultAppOptions: ApplicationOptions = Object.freeze({
  name: 'foo',
  projectRoot: '',
  routing: true,
});

function getStyle(key: string): Style | undefined {
  return Object.values(Style).find((s) => {
    return s === key;
  });
}

export async function setupProject(
  schematicRunner: SchematicTestRunner,
  options?: string | { [key: string]: any }
): Promise<UnitTestTree> {
  if (typeof options === 'string') {
    options = { name: options };
  }
  options = options || {};
  if (options.styleFileFormat) {
    options.style = getStyle(options.styleFileFormat);
  }
  delete options.styleFileFormat;
  const appOptions: ApplicationOptions = { ...defaultAppOptions, ...options };
  let tree = await schematicRunner.runSchematicAsync('workspace', { ...workspaceOptions }).toPromise();
  tree = await schematicRunner.runSchematicAsync('application', appOptions, tree).toPromise();

  return tree;
}
