var connect = require('connect');
var http = require('http');
var web = connect().use(connect.static('public'));

var restify = require('restify');
var api = restify.createServer();
api.use(restify.fullResponse());
api.use(function(request, response, next) {
	response.once('header', function() {
		response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3020');
	});
	next();
});
api.get('/node', function(request, response, next) {
	response.send({ version: process.version });
});

http.createServer(web).listen(3020, 'localhost');
api.listen(3021, 'localhost');