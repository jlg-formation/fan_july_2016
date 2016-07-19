(function() {
	'use strict';

	var app = angular.module('ors-ws', ['ngRoute', 'angularSpinner']);

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
		var $rootScope = $injector.get('$rootScope');
		$q.when('start')
			.then(function() {
				$rootScope.showSpinner = true;
				return $http.get('../ws/s1')
			})
			.then(function(response){
				return $q.all([$http.get('../ws/s2'), $http.get('../ws/s3'), $http.get('../ws/s4')]);
			})
			.then(function(responses){
				console.log('responses', responses);
				if (responses[2].data.myProperty === 'valeur4') {
					return $http.get('../ws/s5');
				} 
				return $http.get('../ws/s6');
			})
			.finally(function(){
				$rootScope.showSpinner = false;
			})
			.catch(function(error) {
				console.error('Error : ', error);
			});
		
	}]);

	
})();
