import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'regrid-<%= dasherize(name) %>',
  styleUrls  : ['./<%= dasherize(name) %>.component.styl'],
  templateUrl: './<%= dasherize(name) %>.component.html',
})
export class <%= classify(name) %>Component implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

}
