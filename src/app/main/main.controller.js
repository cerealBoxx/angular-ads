'use strict';

angular.module('ads')
  .controller('MainCtrl', function ($scope, adResource) {
    $scope.adArray = adResource.query().ads;


  });
