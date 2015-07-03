'use strict';

angular.module('coderado.views.profile', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {
    templateUrl: 'profile.template.html',
    controller: 'ViewProfileCtrl'
  });
}])

.controller('ViewProfileCtrl', [function() {

}]);
