'use strict';

function ViewContactCtrl ($scope) {
    $scope.sendEmail = function (fromName, fromEmail, fromMsg) {
        console.log(fromName);
    }
}

angular.module('coderado.views.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    template: require('views/contact/contact.template.html'),
    controller: 'ViewContactCtrl'
  });
}])

.controller('ViewContactCtrl', ViewContactCtrl);


