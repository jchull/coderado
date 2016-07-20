(function () {
  "use strict";

  var socialIcons = require('svg-social-icons');

  module.exports =
    angular.module("coderado.components.svg.icon", [])

      .directive("svgIcon", function () {
        return {
          restrict: "E",
          replace: true,
          scope: {
            icon: "@"
          },
          link: function (scope, tElem, tAttrs) {
            tElem.replaceWith(socialIcons(scope.icon));
          }

        }
      })
      .name;

})();
