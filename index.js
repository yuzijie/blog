var express = require('express');
var app = express();

// open shift
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(server_port, server_ip_address, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening on " + host + ", server_port " + port);
});
