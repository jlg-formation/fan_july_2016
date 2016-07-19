(function() {
	'use strict';

	var app = angular.module('ors-ws', ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/ws', {
				templateUrl: 'ors-ws/tmpl/ws.html', 
				controller: 'ors-ws.Ctrl',
				controllerAs: 'ctrl'
			});
			
	}]);
	
	app.controller('ors-ws.Ctrl', ['$scope', '$injector', function($scope, $injector) {
		console.log('coucou');
		var $http = $injector.get('$http');
		var $q = $injector.get('$q');
		$http.get('../ws/s1')
			.then(function(response){
				return $q.all([$http.get('../ws/s2'), $http.get('../ws/s3'), $http.get('../ws/s4')]);
			})
			.then(function(response){
				return $http.get('../ws/s5');
			})
			.catch(function(error) {
				console.error('Error : ', error);
			});
		
	}]);

	
})();
