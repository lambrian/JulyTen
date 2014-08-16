var express = require('express');
var http = require('http');
var app = express();
var routes = require('./routes');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendfile('public/index.html')
});

http.createServer(app).listen(app.get('port'), function(){});
