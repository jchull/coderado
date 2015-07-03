'use strict';

angular.module('coderado.views.resume', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resume', {
    templateUrl: 'resume.template.html',
    controller: 'ViewResumeCtrl'
  });
}])

.controller('ViewResumeCtrl', [function() {

}]);
