module.exports = {
	table: 'user',
	schema:{
		username:{
			type: 'string',
			length: 255,
			required: true,
			unique: true
		},
		password:{
			type: 'string',
			length: 255,
			required: true
		},
		email:{
			type: 'string',
			length: 255,
			required: true,
			unique: true
		},
		auth_id:{
			type: 'string',
			length: 255,
			required: true
		},
		auth_token:{
			type: 'string',
			length: 255
		}
	},
	beforeCreate: function(user, next){
		user.auth_id = 'randomized string';
		next();
	}
};