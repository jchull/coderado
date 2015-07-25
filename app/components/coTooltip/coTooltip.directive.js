'use strict';

/**
 * @ngdoc directive
 * @name coderado.directive:coTooltip
 * @description
 * # coTooltip
 */
angular.module('coderado')
  .directive('coTooltip', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        console.log(attrs['coTooltip']);
        //TODO: add in the CSS and DOM for the hover effect
      }
    };
  });
