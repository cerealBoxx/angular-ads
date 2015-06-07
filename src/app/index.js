'use strict';

angular.module('ads', ['ngCookies', 'ngResource', 'ui.router', 'ui.bootstrap', 'adsServices'])
  .constant("apiUrl", "http://softuni-ads.azurewebsites.net/api")
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('ads', {
        url: '/ads',
        templateUrl:'app/ads/ads-main.html',
        controller: 'AdsMainCtrl'
      })
      //.state('ad-details', {
      //  temlateUrl: 'app/ads/ad-details.html',
      //  controller: 'AdDetailsCtrl'
      //})
      ;

    $urlRouterProvider.otherwise('/');
  })
;
