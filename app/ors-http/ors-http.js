(function() {
	'use strict';

	var app = angular.module('ors-http', []);

	
	app.config(['$httpProvider', '$provide', function($httpProvider, $provide) {
		$provide.factory('myHttpInterceptor', ['$injector', function($injector) {
			var $log = $injector.get('$log');
			var $q = $injector.get('$q');
			var $rootScope = $injector.get('$rootScope');
			var isStarted = false;
			var counter = 0;
			var startSpin = function() {
				counter++;
				setTimeout(function() {
					if (counter > 0) {
						$rootScope.showSpinner = true;
						$rootScope.$apply();
					}
				}, 500);
			}
			var stopSpin = function() {
				counter--;
				if (counter <= 0) {
					$rootScope.showSpinner = false;
				}
			}

			return {
				// optional method
				request: function(config) {
					console.log('config', config);
					if (config.url.match(/tmpl\//) === null) { 
						startSpin();
						config.spinner = true;
					}
					
					return config;
				},


				// optional method
				response: function(response) {
					console.log('response', response);
					if (response.config.spinner == true) {
						stopSpin();
						delete response.config.spinner;
					}

					// do something on success
					return response;
				},

				// optional method
				responseError: function(rejection) {
					console.log('rejection', rejection);
					if (rejection.config.spinner == true) {
						stopSpin();
						delete rejection.config.spinner;
					}

					return $q.reject(rejection);
				}
			};	
		}]);	
		$httpProvider.interceptors.push('myHttpInterceptor');

	}]);
})();
