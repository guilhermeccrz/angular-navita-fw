var ctrl = angular.module('ctrl', []);

ctrl.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.orderProp = 'age';
}]);



