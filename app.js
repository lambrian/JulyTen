var express = require('express');
var http = require('http');
var app = express();
var data = require('./routes/data.js');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));
app.get('/data', data.get);

http.createServer(app).listen(app.get('port'), function(){});
