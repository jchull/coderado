'use strict';

angular.module('coderado.version', [
  'coderado.version.interpolate-filter',
  'coderado.version.version-directive'
])

.value('version', '0.1');
