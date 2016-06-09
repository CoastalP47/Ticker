const express   = require('express');
const jsonapi   = require(`${__dirname}/jsonapi`);

module.exports = {
	init: function(app, models){
		var $this = this;
		/**
		 * create api routes for each found model
		 */
		_.each(models, function(v, k){
			var api_routes = $this.buildAPIRoutes(v, k);
			console.log(`Registering model routes for ${k}`);
			app.use(`/${k}`, api_routes);
		});
	},

	buildAPIRoutes: function(model, name){
		var router = express.Router();

		function capitalize(string){
			return string.charAt(0).toUpperCase() + string.slice(1);
		}
		var Model = global[capitalize(name)];

		/**
		 * index route
		 */
		router.get('/', function(req, res){
			Model.find(
				null,
				function(response){
					res.json(response);
				});
		});

		/**
		 * single route
		 */
		router.get('/:id', function(req, res){
			Model.find(
				req.params.id,
				function(response, error){
					if(error){
						res.status(500).send(error);
					}else{
						res.json(response);
					}
				});
		});


		/**
		 * create route
		 */
		router.post('/', function(req, res){
			console.log(req.body);
			Model.create(
				req.body,
				function(response){
					res.json(response);
				});
		});


		/**
		 * update route
		 */
		router.put('/:id', function(req, res){
			console.log(req.body);
			res.send(name + ' update route: ' + req.params.id);
		});


		/**
		 * delete route
		 */
		router.delete('/:id', function(req, res){
			console.log(req.params.id);
			res.send(name + ' delete route: ' + req.params.id);
		});

		return router;
	}

};