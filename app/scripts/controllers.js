'use strict'
angular.module('buyBlueApp')
    .controller('BlueController', ['$scope', 'blueService', function($scope, blueService) {

    	$scope.items=blueService.getItems();
    	console.log($scope.items);
    	$scope.promotions=blueService.getPromotions();
    	console.log($scope.promotions)

    }]);