/**
 * Import NPM modules
 */
const mysql     = require('mysql');
const squel     = require('squel');
const async     = require('async');
const _         = require('lodash');
const express   = require('express');

/**
 * Init ticker application
 */
module.exports = function(params){
	global.Ticker = {};
	if(!params.env)
		params.env = 'prod';
	Ticker.config    = require('./config/config')[params.env];
	Ticker.database  = require('./config/database')[params.env];

	console.log(Ticker);


	/**
	 * Import custom modules
	 */
	const app = express();
	app.get('/', function (req, res) {
		res.send('Hello World!');
	});

	app.listen(Ticker.config.port, function () {
		console.log(`Ticker listening on port ${Ticker.config.port} in ${Ticker.config.mode} mode!`);
	});

	/**
	 * Init Router
	 */


	/**
	 * Init ORM
	 */
};