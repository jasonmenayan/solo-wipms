store.js

'use strict';

/**
 * @ngdoc function
 * @name wipmsApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the wipmsApp
 */
angular.module('wipmsApp', ['ngStorage'])
  .controller('StoreCtrl', function ($scope, $location, $localStorage) {
 
  	$scope.locTree = {
  			'01-01-00': 'Bedroom',
  			'01-02-00': 'Living room',
  			'01-03-00': 'Home office',
  			'01-04-00': 'Kitchen',
  			'01-05-00': 'Bathroom',
  			'01-06-00': 'Guest bedroom',
  			'01-07-00': 'Basement',
  			'01-01-01': 'Closet',
  			'01-01-02': 'Under bed',
  			'01-02-01': 'Entertainment center',
  			'01-02-02': 'Hall closet',
  			'01-02-03': 'Mantle',
  			'01-03-01': 'Filing cabinet',
  			'01-03-02': 'Closet',
  			'01-03-03': 'Archive bin',
  			'01-03-04': 'Cabinets'
  			'01-04-01': 'Spice cabinet',
  			'01-04-02': 'Pantry',
  			'01-04-03': 'Top of refrigerator',
  			'01-05-01': 'Medicine cabinet',
  			'01-06-01': 'Short chest of drawers',
  			'01-06-02': 'Tall chest of drawers',
  			'01-06-03': 'Closet',
  			'01-07-01': 'Under stairs',
  			'01-07-02': 'Box storage'
  	};

  	$scope.addItemName = function(item) {
  		$scope.item.name = item;
  		$scope.item.date = Date.now();
  		$location.path('/locDrilldown');
  	};
  	
  	$scope.locBuilder = '';

  	$scope.newLoc = function(level, levelLoc) {
  		// add a new location based on user input 

  	};



  });



// form validation
// use this regex: /^[\w\- ]+$/
// accepts alphanumerics dash and space only