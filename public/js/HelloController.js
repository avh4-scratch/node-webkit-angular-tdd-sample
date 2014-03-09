'use strict';

angular.module("HelloApp", []).controller('HelloController', ['$scope', '$http',
    function($scope, $http) {
        $scope.name = "World";

        $scope.fetchNodeInfo = function() {
            $http.get("http://localhost:3021/node")
                .success(function(data) {
                    $scope.version = data.version;
                });
        };
    }
]);
