# Getting Started With Elpis2 Angular Schematics

This repository implements customized Elpis2 Angular Schematics

### Installation

```bash
yarn add --dev @elpis2/ng-schematics
```

### Available Schematics

#### Standard ports with formatting changes
* `class` - A customized Elpis2 class with properly formatted .spec.ts and .ts files
* `component` - A customized Elpis2 component with properly formatted .html, .styl, .spec.ts, and .ts files
* `directive` - A customized Elpis2 directive with properly formatted .spec.ts and .ts files
* `enum` - A customized Elpis2 enum with properly formatted .ts file
* `guard` - A customized Elpis2 guard with properly formatted .spec.ts and .ts files
* `interceptor` - A customized Elpis2 interceptor with properly formatted .spec.ts and .ts files
* `interface` - A customized Elpis2 interface with properly formatted .ts file
* `module` - A customized Elpis2 module with properly formatted .spec.ts and .ts files
* `service` - A customized Elpis2 service with properly formatted .spec.ts and .ts files

#### Custom schematics
* `lazy-module` - A custom Elpis2 component/service/module/routing module combo with properly formatted .html, .styl, .spec.ts, and .ts files

### Usage

```bash
ng generate @elpis2/ng-schematics:component 'line chart'
```
This will give us a new component in /src/app/line-chart.
