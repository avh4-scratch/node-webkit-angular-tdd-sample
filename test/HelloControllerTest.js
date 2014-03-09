describe('HelloController', function() {
    var $scope;

    beforeEach(module('HelloApp'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('HelloController', {
            '$scope': $scope
        });
    }));

    it('sets the initial name', function() {
        expect($scope.name).toEqual('World');
    });

    describe('fetchNodeInfo()', function() {
        it('requests the data from the backend', inject(function($httpBackend) {
            $httpBackend.whenGET("http://localhost:3021/node").respond({
                version: "99.1"
            });
            $scope.fetchNodeInfo();
            $httpBackend.flush();
            expect($scope.version).toBe("99.1");
        }));
    });
});
