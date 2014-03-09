var connect = require('connect');
var http = require('http');

var web = connect().use(connect.static('public'));

http.createServer(web).listen(3020, 'localhost');
