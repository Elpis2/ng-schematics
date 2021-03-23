import {
  Component,
  OnInit,
} from '@angular/core';

import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';

@Component({
  selector: 'regrid-<%= dasherize(name) %>',
  styleUrls  : ['./<%= dasherize(name) %>.component.styl'],
  templateUrl: './<%= dasherize(name) %>.component.html',
})
export class <%= classify(name) %>Component implements OnInit {

  constructor(
    private <%= camelCase(name) %>Service: <%= classify(name) %>Service,
  ) { }

  public ngOnInit(): void {
  }

}
