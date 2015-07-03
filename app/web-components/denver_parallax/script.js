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
          if(limitElement[0].getBoundingClientRect().top<40){
            if(limit>0)
              raw.scrollTop = limit;
            else
              limit = raw.scrollTop;


          }
          /*console.log(raw.scrollTop + raw.offsetHeight);
           console.log(raw.scrollHeight);
           if (raw.scrollTop + raw.offsetHeight > raw.scrollHeight) {
           scope.$apply();
           }*/
        });
      }
    };
  });
}());

