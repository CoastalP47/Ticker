const args      = require('minimist')(process.argv.slice(2));
const config    = require('./api/config/config');

/**
 * Set env
 */
var env = 'prod';
if(args.env){
	if(config[args.env])
		env = args.env;
}

/**
 * Start Ticker
 */
require('./api/ticker')({
	env:env
});