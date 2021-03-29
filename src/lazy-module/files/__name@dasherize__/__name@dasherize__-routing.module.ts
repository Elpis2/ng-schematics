import { NgModule }     from '@angular/core';
import {
  RouterModule,
  Routes,
}                   from '@angular/router';

import { <%= classify(name) %>Component } from './<%= dasherize(name) %>.component';

const routes: Routes = [
  {
    path     : '',
    component: <%= classify(name) %>Component,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class <%= classify(name) %>RoutingModule { }
