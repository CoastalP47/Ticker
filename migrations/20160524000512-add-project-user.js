'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback){
  db.createTable('project_user', {
    id: {
      type: 'int',
      primaryKey: true
    },
    project_id: {
      type: 'string',
      length:11,
      notNull:true
    },
    user_id: {
      type: 'int',
      length:11,
      notNull:true
    }
  }, callback);
};

exports.down = function(db, callback){
  db.dropTable('project_user', callback);
};
