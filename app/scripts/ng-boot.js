(function() {
  "use strict";
  /* jshint browser:true */
  require('./vendor')();
  // loading this directly to prevent flashing on load
  // require('../styles/main.css');

  // load the main app file
  var appModule = require('../index');

  // replaces ng-app="appName"
  angular.element(document).ready(function() {
    angular.bootstrap(document, [appModule.name], {
      // strictDi: true
    });
  });

})();
