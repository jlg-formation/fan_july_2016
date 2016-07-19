(function() {
	'use strict';

	var app = angular.module('ors-star', []);

	app.directive('orsStar', function() {
		return {
			restrict: 'E',
			link: function(scope, element, attrs) {
				console.log('orsStar', arguments);
				var note = Number(attrs.note);
				note = isNaN(note) ? 4 : note;
				console.log('note', note);
				var html = '';
				for (var i = 0; i < note; i++) {
					html += '<img src="ors-star/img/yellow_star.png" />';
				}
				for (var i = note; i < 5; i++) {
					html += '<img src="ors-star/img/white_star.png" />';
				}
				element.html(html);
			}
		};
	});
	
})();
