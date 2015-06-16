'use strict';

/**
 * @ngdoc overview
 * @name wipmsApp
 * @description
 * # wipmsApp
 *
 * Main module of the application.
 */
angular
  .module('wipmsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl'
      })
      .when('/retrieve', {
        templateUrl: 'views/retrieve.html',
        controller: 'RetrieveCtrl'
      })
      .when('/locDrilldown', {
        templateUrl: 'views/locDrilldown.html',
        controller: 'StoreCtrl'
      })
      .when('/locStored', {
        templateUrl: 'views/locStored.html',
        controller: 'StoreCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
