(function(){
  'use strict';

  /* Well, this ties it to angular, but I have no reason to break it out currently */

  angular
    .module('coderado')
    .directive('scrollLimit', function ($window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var raw = element[0];
        var limitElement = raw.getElementsByClassName('limit');
        var limit = 0;
        angular.element(element).bind('scroll', function () {
          if(limitElement[0].getBoundingClientRect().top<1){
            if(limit>0)
              raw.scrollTop = limit;
            else
              limit = raw.scrollTop;


          }
        });
      }
    };
  });
}());

