(function() {
  "use strict";

  angular.module("coderado.views.contact", [])

    .controller("ViewContactController", function ViewContactController($log) {
      var ctrl = this;

      ctrl.sendEmail = function(fromName, fromEmail, fromMsg) {
        $log.debug(fromName);
        $log.debug(fromEmail);
        $log.debug(fromMsg);
      };

    });
})();
