describe('test star widget', function() {
  it('should update correctly', function() {
    browser.get('http://localhost:8000/app/index.html');

    var orsStar = element.all(by.css('ors-star')).get(4);
	var star = orsStar.all(by.css('img')).get(4);
	star.click();

	var input = element.all(by.css('input')).get(0);
   
    expect(input.getAttribute('value')).toEqual('5');

  });
});