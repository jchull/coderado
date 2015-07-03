'use strict';

angular.module('coderado.views.about', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: 'views/about/about.template.html',
    controller: 'ViewAboutCtrl'
  });
}])

.controller('ViewAboutCtrl', [function($scope) {

}]);
