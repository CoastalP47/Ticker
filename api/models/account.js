module.exports = {
	table: 'account',
	schema:{
		name:{
			type: 'string',
			required: true
		},
		logo:{
			type: 'integer'
		},
		phone:{
			type: 'string',
			length: 50
		},
		email:{
			type: 'string',
			required: true
		},
		location:{
			type: 'string'
		}
	}
};