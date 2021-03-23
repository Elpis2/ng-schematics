import { TestBed } from '@angular/core/testing';

import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service';

describe('<%= classify(name) %>Service', (): void => {

  let service: <%= classify(name) %>Service;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(<%= classify(name) %>Service);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });

});
