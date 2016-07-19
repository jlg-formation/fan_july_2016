(function() {
	'use strict';

	var app = angular.module('mainApp', ['ors-star', 'ngRoute', 'ors-ws']);
	
	app.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'tmpl/menu/home.html'
			})
			.when('/test', {
				templateUrl: 'tmpl/menu/test.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
	
	app.run(['$rootScope', function($rootScope) {
		$rootScope.myNote = 2;
		$rootScope.showSpinner = false;
	}]);

	app.directive('orsHeader', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-header.html',
			transclude: true
		};
	});
	
	app.directive('orsBody', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-body.html',
			transclude: true
		};
	});
	
	app.directive('orsFooter', function() {
		return {
			restrict: 'E',
			templateUrl: 'tmpl/ors-footer.html',
			transclude: true
		};
	});
	
})();
