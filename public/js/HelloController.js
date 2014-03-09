'use strict';

angular.module("HelloApp", []).controller('HelloController', ['$scope',
  function($scope) {
    $scope.name = "World";
}]);
