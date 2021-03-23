import { TestBed } from '@angular/core/testing';

import { <%= classify(name) %>Interceptor } from './<%= dasherize(name) %>.interceptor';

describe('<%= classify(name) %>Interceptor', (): void => {

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      <%= classify(name) %>Interceptor,
      ],
  }));

  it('should be created', (): void => {
    const interceptor: <%= classify(name) %>Interceptor = TestBed.inject(<%= classify(name) %>Interceptor);
    expect(interceptor).toBeTruthy();
  });

});
