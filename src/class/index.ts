import { strings }          from '@angular-devkit/core';
import { classify }         from '@angular-devkit/core/src/utils/strings';
import {
  apply,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  template,
  Tree,
  url,
}                           from '@angular-devkit/schematics';
import { parseName }        from '@schematics/angular/utility/parse-name';
import { buildDefaultPath } from '@schematics/angular/utility/project';

import { Schema } from './schema';

export function regridClass(_options: Schema): Rule {

  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = tree.read('angular.json');
    if (!workspaceConfigBuffer) {
      throw new SchematicsException('Not an Angular CLI workspace');
    }

    const workspaceConfig    = JSON.parse(workspaceConfigBuffer.toString());
    const projectName        = _options.project || workspaceConfig.defaultProject;
    const project            = workspaceConfig.projects[projectName];
    const defaultProjectPath = buildDefaultPath(project);
    const parsedPath         = parseName(defaultProjectPath, _options.name);
    const {
            name,
            path,
          }                  = parsedPath;

    const sourceTemplates              = url('./files');
    const sourceParameterizedTemplates = apply(sourceTemplates, [
      template({
                 ..._options,
                 ...strings,
                 classify,
                 name,
               }),
      move(path),
    ]);
    return mergeWith(sourceParameterizedTemplates)(tree, _context);
  };

}
