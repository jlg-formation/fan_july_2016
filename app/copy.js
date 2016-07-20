(function() {
	'use strict';

	var clone = function(obj) {
		var result = {};
		for (var p in obj) {
			if (obj[p] !== null && typeof obj[p] === 'object') {
				result[p] = clone(obj[p]);
			} else {
				result[p] = obj[p];
			}
			
		}
		return result;
	};
	
	window.clone = clone;
})();
