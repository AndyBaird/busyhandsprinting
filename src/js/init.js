'use strict';
var jQuery = require("jquery");
var $ = require("jquery");
var bulk = require('bulk-require');
var router = require('./router');

// Require all of our controllers
bulk(__dirname, ['controllers/**/*.js']);

// Start the router
router.init();
