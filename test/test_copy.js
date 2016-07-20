(function() {
	'use strict';

	describe('copy.js', function() {
		
		var a;
		var b;
		
		beforeEach(function() {
			a = {
				x: {
					y: 6
				}
			};
			b = clone(a);
		});

		it('should clone correctly', function() {
			expect(a.x.y).toEqual(b.x.y);
		});
		
		it('should clone correctly 1', function() {
			b.x.y = 3;
			expect(b.x.y).toEqual(3);
			expect(a.x.y).toEqual(6);
		});

	});
	
})();
