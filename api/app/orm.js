const mysql = require('mysql');
const squel = require('squel');

/**
 * Create DB connection
 */
const connection = mysql.createConnection(Ticker.database);

module.exports = {
	init: function(models){
		var $this = this;

		_.each(models, function(model, name){
			function capitalize(string){
				return string.charAt(0).toUpperCase() + string.slice(1);
			}
			var global_name = capitalize(name);
			model._table = model.table ? model.table : name;
			global[global_name] = $this.buildORMFunctions(model);
		});
	},

	buildORMFunctions: function(model){
		var $this = this;

		var functions = {
			find    : $this.find(model),
			create  : $this.create(model),
			update  : $this.update(model),
			delete  : $this.delete(model)
		};

		return functions;
	},

	find: function(model){
		return function(id, callback){
			var query = squel.select();
			query.from(model._table);

			if(id){
				if(_.isArray(id)){
					/**
					 * Get array of IDs
					 */
					query.where("id IN ?", id);
				}else{
					/**
					 * Get Single ID
					 */
					query.where("id = ?", id);
				}
			}
			query = query.toString();

			/**
			 * Run query
			 */
			connection.query(
				query,
				function(err, rows, fields){
					if(err)
						throw err;
					return callback(rows);
				});
		}
	},
	create: function(model, callback){
		return function(params){

		}
	},
	update: function(model, callback){
		return function(id, params){

		}
	},
	delete: function(model, callback){
		return function(id){

		}
	}


};