"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regridGuard = void 0;
const core_1 = require("@angular-devkit/core");
const strings_1 = require("@angular-devkit/core/src/utils/strings");
const schematics_1 = require("@angular-devkit/schematics");
const parse_name_1 = require("@schematics/angular/utility/parse-name");
const project_1 = require("@schematics/angular/utility/project");
const schema_1 = require("./schema");
function regridGuard(_options) {
    return (tree, _context) => {
        const workspaceConfigBuffer = tree.read('angular.json');
        if (!workspaceConfigBuffer) {
            throw new schematics_1.SchematicsException('Not an Angular CLI workspace');
        }
        if (!_options.implements) {
            throw new schematics_1.SchematicsException('Option "implements" is required.');
        }
        const implementations = _options.implements
            .map(implement => implement === 'CanDeactivate' ? 'CanDeactivate<unknown>' : implement)
            .join(', ');
        let implementationImports = `${_options.implements.join(', ')}, `;
        // As long as we aren't in IE... ;)
        if (_options.implements.includes(schema_1.Implement.CanLoad)) {
            implementationImports = `${implementationImports}Route, UrlSegment, `;
        }
        const workspaceConfig = JSON.parse(workspaceConfigBuffer.toString());
        const projectName = _options.project || workspaceConfig.defaultProject;
        const project = workspaceConfig.projects[projectName];
        const defaultProjectPath = project_1.buildDefaultPath(project);
        const parsedPath = parse_name_1.parseName(defaultProjectPath, _options.name);
        const { name, path, } = parsedPath;
        const sourceTemplates = schematics_1.url('./files');
        const sourceParameterizedTemplates = schematics_1.apply(sourceTemplates, [
            schematics_1.template(Object.assign(Object.assign(Object.assign({ implementations,
                implementationImports }, _options), core_1.strings), { classify: strings_1.classify,
                name })),
            schematics_1.move(path),
        ]);
        return schematics_1.mergeWith(sourceParameterizedTemplates)(tree, _context);
    };
}
exports.regridGuard = regridGuard;
//# sourceMappingURL=index.js.map