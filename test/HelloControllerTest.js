describe('HelloController', function() {
  var $scope;

  beforeEach(module('HelloApp'));

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('HelloController', { '$scope': $scope });
  }));

  it('sets the initial name', function() {
    expect($scope.name).toEqual('World');
  });
});
