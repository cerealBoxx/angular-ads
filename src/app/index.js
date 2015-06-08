'use strict';

var app;
app = angular.module('ads', ['ngCookies', 'ngResource', 'ui.router', 'ui.bootstrap', 'adsServices'])
  .constant("apiUrl", "http://softuni-ads.azurewebsites.net/api")
  .constant("pageSize", 2)
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        templateUrl: 'app/login/login.html',
        url:'/login',
        controller: 'LoginCtrl'
      })
      //.state('ads', {
      //  url: '/ads',
      //  templateUrl: 'app/ads/ads-main.html',
      //  controller: 'AdsMainCtrl'
      //})
      //.state('ad-details', {
      //  temlateUrl: 'app/ads/ad-details.html',
      //  controller: 'AdDetailsCtrl'
      //})
    ;

    $urlRouterProvider.otherwise('/');
  });
