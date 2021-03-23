import { <%= classify(name) %>Directive } from './<%= dasherize(name) %>.directive';

describe('<%= classify(name) %>Directive', (): void => {

  it('should create an instance', (): void => {
    const directive = new <%= classify(name) %>Directive();
    expect(directive).toBeTruthy();
  });

});
