import { Directive } from '@angular/core';

@Directive({
  selector: '[regrid<%= classify(name) %>]',
})
export class <%= classify(name) %>Directive {

  constructor() { }

}
