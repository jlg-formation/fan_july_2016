(function() {
	'use strict';

	var app = angular.module('ors-ws', ['ngRoute']);

	app.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/ws', {
				templateUrl: 'ors-ws/tmpl/ws.html'
			})
			
	}]);

	
})();
