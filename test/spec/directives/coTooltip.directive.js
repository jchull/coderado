'use strict';

describe('Directive: coTooltip', function () {

  // load the directive's module
  beforeEach(module('coderado'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<co-tooltip></co-tooltip>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the coTooltip directive');
  }));
});
