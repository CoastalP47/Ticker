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
  db.createTable('user', {
    id: {
      type: 'int',
      primaryKey: true
    },
    username: {
      type: 'string',
      length: 256,
      notNull:true
    },
    email: {
      type: 'string',
      notNull:true
    },
    password: {
      type: 'string',
      notNull:true
    },
    auth_id: {
      type: 'string',
      notNull:true
    },
    auth_token: {
      type: 'string',
      notNull:true
    }
  }, callback);
};

exports.down = function(db, callback){
  db.dropTable('user', callback);
};
