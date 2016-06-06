module.exports = {
	table: 'project',
	schema: {
		name:{
			type: 'string',
			length: 256,
			required: true
		},
		deadline:{
			type: 'string'
		},
		client:{
			type: 'integer',
			required: true
		},
		account:{
			type: 'integer',
			required: true
		}
	}
};