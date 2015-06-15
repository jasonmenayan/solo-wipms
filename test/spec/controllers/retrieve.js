'use strict';

describe('Controller: RetrieveCtrl', function () {

  // load the controller's module
  beforeEach(module('wipmsApp'));

  var RetrieveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RetrieveCtrl = $controller('RetrieveCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
