import { TestBed } from '@angular/core/testing';

import { <%= classify(name) %>Guard } from './<%= dasherize(name) %>.guard';

describe('<%= classify(name) %>Guard', (): void => {

  let guard: <%= classify(name) %>Guard;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(<%= classify(name) %>Guard);
  });

  it('should be created', (): void => {
    expect(guard).toBeTruthy();
  });

});
