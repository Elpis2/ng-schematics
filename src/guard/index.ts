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

import { Schema, Implement } from './schema';

export function regridGuard(_options: Schema): Rule {

  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = tree.read('angular.json');
    if (!workspaceConfigBuffer) {
      throw new SchematicsException('Not an Angular CLI workspace');
    }

    if (!_options.implements) {
      throw new SchematicsException('Option "implements" is required.');
    }

    const implementations = _options.implements
    .map(implement => implement === 'CanDeactivate' ? 'CanDeactivate<unknown>' : implement)
    .join(', ');
    let implementationImports = `${_options.implements.join(', ')}, `;
    // As long as we aren't in IE... ;)
    if (_options.implements.includes(Implement.CanLoad)) {
      implementationImports = `${implementationImports}Route, UrlSegment, `;
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
                 implementations,
                 implementationImports,
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
