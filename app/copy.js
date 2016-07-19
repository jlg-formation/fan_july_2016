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
	
	var a = {
		x: {
			y: 6
		}
	};
	var b = clone(a);
	console.log('a.x.y', a.x.y);
	console.log('b.x.y', b.x.y);
	b.x.y = 3;
	console.log('a.x.y', a.x.y);
	console.log('b.x.y', b.x.y);
	
})();
