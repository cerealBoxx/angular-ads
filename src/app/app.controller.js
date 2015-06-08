'use strict';

app.controller('AddCtrl', ['$scope','authService', function($scope, authService){
    $scope.authService = authService;
}]);
