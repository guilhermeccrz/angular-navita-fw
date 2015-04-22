var navitaApp = angular.module('navitaApp',['ngRoute','ctrl']);

navitaApp.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {

    $routeProvider.when('/teste', {
        templateUrl: 'template.html',
        controller: 'AppCtrl'
      });

     	$locationProvider.html5Mode({
		    enabled: true,
		    requireBase: false
		});
  }]);