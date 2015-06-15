'use strict';

/**
 * @ngdoc function
 * @name wipmsApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the wipmsApp
 */
angular.module('wipmsApp')
  .controller('NavCtrl', function ($scope) {
    $scope.tab = 1;
    $scope.selectTab = function(tabChoice) {
    	$scope.tab = tabChoice;
    };
    $scope.tabSelected = function(checkTab) {
    	return ($scope.tab === checkTab);
    };
  });
