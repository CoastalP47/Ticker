module.exports = {
	table: 'milestone',
	schema: {
		name:{
			type: 'string',
			length: 256,
			required: true
		},
		deadline:{
			type: 'date'
		},
		creator:{
			type: 'integer',
			required: true
		},
		project:{
			type: 'integer',
			required: true
		}
	}
};