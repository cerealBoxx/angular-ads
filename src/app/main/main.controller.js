'use strict';

angular.module('ads')
  .controller('MainCtrl', function ($scope, AdResource, pageSize) {
    var data = AdResource.queryAll().$promise.then(function (data) {
      $scope.adArray = data.ads;
    });



  });
