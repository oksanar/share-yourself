'use strict';

describe('Controller: PortfolioCtrl', function () {

  // load the controller's module
  beforeEach(module('myprojApp'));

  var PortfolioCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfolioCtrl = $controller('PortfolioCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
