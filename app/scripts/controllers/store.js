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

  	$scope.items = {};
 
  	var locTree: {
  			'Bedroom': null,
  			'Living room': null,
  			'Home office': null,
  			'Kitchen': null,
  			'Bathroom': null,
  			'Guest bedroom': null,
  			'Basement': null,
  			'Bedroom: Closet': null,
  			'Bedroom: Under bed': null,
  			'Living room: Entertainment center': null,
  			'Living room: Hall closet': null,
  			'Living room: Mantle': null,
  			'Home office: Filing cabinet': null,
  			'Home office: Closet': null,
  			'Home office: Archive bin': null,
  			'Home office: Cabinets': null,
  			'Kitchen: Spice cabinet': null,
  			'Kitchen: Pantry': null,
  			'Kitchen: Top of refrigerator': null,
  			'Bathroom: Medicine cabinet': null,
  			'Guest bedroom: Short chest of drawers': null,
  			'Guest bedroom: Tall chest of drawers': null,
  			'Guest bedroom: Closet': null,
  			'Basement: Under stairs': null,
  			'Basement: Box storage': null
  	};

  	$scope.createItem = function(name) {
  		$scope.item.itemName = name;
  		$scope.item.timestamp = Date.now();
  		$location.path('/locDrilldown');
  	};

  	$scope.renderLocations = function() {
  		// on the /locDrilldown view, renders list of locTree locations which user can select one location by clicking on it
  	};

  	$scope.addLocToItem = function(location) {
  		$scope.item.location = location;
  		$location.path('/locStored');
  	};


  });



// form validation
// use this regex: /^[\w\- ]+$/
// accepts alphanumerics dash and space only