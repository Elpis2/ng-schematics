import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  <%= implementationImports %>,
  RouterStateSnapshot,
  UrlTree,
}                     from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class <%= classify(name) %>Guard implements <%= implementations %> {

  <% if (implements.includes('CanActivate')) { %>public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  <% } %><% if (implements.includes('CanActivateChild')) { %>public canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  <% } %><% if (implements.includes('CanDeactivate')) { %>public canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  <% } %><% if (implements.includes('CanLoad')) { %>public canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }<% } %>

}
