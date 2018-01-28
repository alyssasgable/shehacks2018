'use strict';

var app = require('./index');
var http = require('http');


var server;

/*
 * Create and start HTTP server.
 */

server = http.createServer(app);
var connect = require ('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(81, function(){
    console.log('Server running on 81...');
});
