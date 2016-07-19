(function() {
	'use strict';

	var express = require('express'); // charge ExpressJS
	var serveIndex = require('serve-index');

	var app = express();
	
	app.use(express.static('.'));
	app.use(serveIndex('.', {icons: true}));
	
	app.get('/ws/s1', function(req, res, next) {
		console.log('Appel S1', req.url);
		res.json({myProperty: 'valeur1'});
	});
	
	app.get('/ws/s2', function(req, res, next) {
		console.log('Appel S2', req.url);
		setTimeout(function() {
			res.json({myProperty: 'valeur2'});
		}, 2000);
		
	});
	
	app.get('/ws/s3', function(req, res, next) {
		console.log('Appel S3', req.url);
		setTimeout(function() {
			res.json({myProperty: 'valeur3'});
		}, 3000);
	});
	
	app.get('/ws/s4', function(req, res, next) {
		console.log('Appel S4', req.url);
		setTimeout(function() {
			res.json({myProperty: 'valeur4aze'});
		}, 4000);
	});
	
	app.get('/ws/s5', function(req, res, next) {
		console.log('Appel S5', req.url);
		setTimeout(function() {
			res.json({myProperty: 'valeur5'});
		}, 2000);
	});
	
	
	
	app.all('/app/14_html5/*', function(req, res) {
		res.sendFile('./app/14_html5/index.html', { root: __dirname });
	});

	app.use(function(req, res, next) {
		console.log('404: Page not Found', req.url);
		next();
	});

	app.listen(8000, function() {
		console.log('server started on port 8000');
	});
})();
