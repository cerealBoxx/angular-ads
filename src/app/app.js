'use strict';

var app;
app = angular.module('ads', ['ngCookies', 'ngResource', 'ui.router', 'ui.bootstrap', 'adsServices'])
  .constant("apiUrl", "http://softuni-ads.azurewebsites.net/api")
  .constant("pageSize", 2)
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

   // $locationProvider.html5Mode(true).hashPrefix('!');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        templateUrl: 'app/account/login.html',
        url:'/login',
        controller: 'LoginCtrl'
      })
      .state('register', {
        templateUrl:'app/account/register.html',
        url:'/register',
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
