'use strict';

angular.module('coderado.views.resume', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resume', {
    templateUrl: 'views/resume/resume.template.html',
    controller: 'ViewResumeCtrl'
  });
}])

.controller('ViewResumeCtrl', [function() {

}]);
