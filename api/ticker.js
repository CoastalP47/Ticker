/**
 * Import NPM modules
 */
const express   = require('express');


/**
 * Set globals for utilities
 */
global.async = require('async');
global._ = require('lodash');


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
	app.get('/', function(req, res){
		res.send('Hello World!');
	});

	app.listen(Ticker.config.port, function(){
		console.log(`Ticker listening on port ${Ticker.config.port} in ${Ticker.config.mode} mode!`);
	});


	/**
	 * get models
	 */
	var models = require('require-all')({
		dirname :  __dirname + '/models',
		//filter  :  /(.+Controller)\.js$/,
		recursive: false,
		map     : function(name){
			return name.replace(/_([a-z])/g, function(m, c){
				return c.toUpperCase();
			});
		}
	});


	/**
	 * Build ORM Models
	 */
	require(`${__dirname}/app/orm`).init(models);

	/**
	 * Build Routes
	 */
	require(`${__dirname}/app/router`).init(app, models);
};