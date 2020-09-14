import { WorkspaceSchema } from '@angular-devkit/core/src/experimental/workspace';
import { SchematicsException, Tree } from '@angular-devkit/schematics';

export function getWorkspacePath(host: Tree): string {
  const possibleFiles = ['/angular.json', '/.angular.json'];
  const path = possibleFiles.filter((file) => host.exists(file))[0];

  return path;
}

export function getWorkspace(host: Tree): WorkspaceSchema {
  const path = getWorkspacePath(host);
  const configBuffer = host.read(path);
  if (configBuffer === null) {
    throw new SchematicsException(`Could not find (${path})`);
  }
  const config = configBuffer.toString();

  return JSON.parse(config);
}

export function getProject(host: Tree, project?: string): any {
  const workspace = getWorkspace(host);
  if (workspace) {
    // @ts-ignore
    return workspace.projects[project || workspace.defaultProject];
  }

  throw new SchematicsException('could not find a workspace project');
}
