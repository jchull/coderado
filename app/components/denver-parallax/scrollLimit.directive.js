(function(){
  'use strict';

  /* Well, this ties it to angular, but I have no reason to break it out currently */

  angular
    .module('coderado.components.denver-parallax', [])
    .directive('scrollLimit', function ($window, $document) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var raw = element[0];
        var limitElement = raw.getElementsByClassName('limit');
        var limit = 0;
        angular.element(element).bind('scroll touchmove', function (event) {
          if(limitElement[0].getBoundingClientRect().top < 20){
            raw.scrollTop -= 44;
            event.preventDefault();
            return false;
          }
        });
      }
    };
  });
})();

