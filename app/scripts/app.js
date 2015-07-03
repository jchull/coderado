'use strict';

/**
 * @ngdoc overview
 * @name coderado
 * @description
 * # coderado
 *
 * Main module of the application.
 */
angular
  .module('coderado', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('profile');

    $stateProvider
      .state('profile', {
        url: 'profile',
        templateUrl: 'views/profile.template.html'
      })
      .state('contact', {
        url: 'contact',
        templateUrl: 'views/contact.template.html'
      })
      .state('resume', {
        url: 'resume',
        templateUrl: 'views/resume.template.html'
      })
      .state('about', {
        url: 'about',
        templateUrl: 'views/about.template.html'
      });
  });
