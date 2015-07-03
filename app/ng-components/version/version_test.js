'use strict';

describe('coderado.version module', function() {
  beforeEach(module('coderado.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
