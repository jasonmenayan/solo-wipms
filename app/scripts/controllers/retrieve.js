'use strict';

/**
 * @ngdoc function
 * @name wipmsApp.controller:RetrieveCtrl
 * @description
 * # RetrieveCtrl
 * Controller of the wipmsApp
 */
angular.module('wipmsApp', ['ngStorage'])
  .controller('RetrieveCtrl', function ($scope, $localStorage) {

    var loadItems = function() {
    	$scope.items = $localStorage;
    };

    var matchedItems = function(item) {
    	var matched = [];
    	for (var i in $scope.items) {
    		if (i.itemName === item) {
    			matched.push(i);
    		}
    	}
    	return matched;
    };

    var renderItems = function(matched) {
    	// render itemName, date, and location for all items in matched array
    		// if no matches, display "No matches; please try again"
    }

  });
