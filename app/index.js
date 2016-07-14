(function() {
  "use strict";

/**
 * @ngdoc overview
 * @name coderado
 * @description
 * # coderado
 *
 * Main module of the application.
 */

  require("./views");

/* global angular */
  module.exports = angular
  .module("coderado", [
    "ngAnimate",
    "ngAria",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ui.router",
    "ngMaterial",
    "coderado.views"
  ])

  .config(function configureDevMode($logProvider, $compileProvider) {

    $logProvider.debugEnabled(true);

    // disable Angular's debug info for production
    $compileProvider.debugInfoEnabled(true);
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/welcome");
    $stateProvider
      .state("profile", {
        url: "/profile",
        templateUrl: "/views/profile/profile.html",
        controller: "ViewProfileController",
        controllerAs: "ctrl"
      })
      .state("contact", {
        url: "/contact",
        templateUrl: "views/contact/contact.html",
        controller: "ViewContactController",
        controllerAs: "ctrl"
      })
      .state("resume", {
        url: "/resume",
        templateUrl: "views/resume/resume.html",
        controller: "ViewResumeController",
        controllerAs: "ctrl"
      })
      .state("about", {
        url: "/about",
        templateUrl: "views/about/about.html",
        controller: "ViewAboutController",
        controllerAs: "ctrl"
      })
      .state("welcome", {
        url: "/welcome",
        templateUrl: "views/welcome/welcome.html",
        controller: "ViewWelcomeController",
        controllerAs: "ctrl"
      });
  });
})();
