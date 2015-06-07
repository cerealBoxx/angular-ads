'use strict';

angular.module('ads', ['ngCookies', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      //.state('ad-details', {
      //  temlateUrl: 'app/ads/ad-details.html',
      //  controller: 'AdDetailsCtrl'
      //});

    $urlRouterProvider.otherwise('/');
  })
;
