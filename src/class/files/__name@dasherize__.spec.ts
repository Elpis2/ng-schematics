import { <%= classify(name) %> } from './<%= dasherize(name) %>';

describe(<%= classify(name) %>, (): void => {

  it('should create an instance', (): void => {
    expect(new <%= classify(name) %>()).toBeTruthy();
  });

});
