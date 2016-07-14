(function() {
  "use strict";

  require('./vendor');
  // loading this directly to prevent flashing on load
  // require('../styles/main.css');

  // load the main app file
  var appModule = require('../index');

  // replaces ng-app="appName"
  /* global document*/
  /* eslint no-undef: "error"*/
  angular.element(document).ready(function() {
    /* eslint angular/log: 0 */
    console.log("bootstrapping angular module: " + appModule.name);
    angular.bootstrap(document, [appModule.name], {
      // strictDi: true
    });
  });

})();
