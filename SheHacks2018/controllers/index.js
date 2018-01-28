'use strict';

var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();

    // router.get('/', function (req, res) {
    //
    //     // res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
    //     res.send('<h1>Hello WOrld</h1>');
    //
    // });
    var express = require('express'),
    enrouten = require('express-enrouten');

    var app = express();

    app.use(enrouten({
      routes: [ -
         { path: '/',    method: 'GET', handler: require(/Users/alyssa/github/shehacks2018/SheHacks2018/view/login.html) },
         // { path: '/foo', method: 'GET', handler: require('./routes/foo') },
         // { path: '/admin', method: 'GET', handler: require('./routes/foo'), middleware: [isAuthenticated] }
     ]
}));

};
