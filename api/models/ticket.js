module.exports = {
	table: 'ticket',
	schema:{
		title:{
			type: 'string',
			length: 256,
			required: true
		},
		description:{
			type: 'string'
		},
		priority:{
			type: 'integer'
		},
		deadline:{
			type: 'date'
		},
		creator:{
			type: 'integer',
			required: true
		},
		assigned:{
			type: 'integer'
		},
		status:{
			type: 'integer',
			required: true
		},
		milestone:{
			type: 'integer'
		},
		project:{
			type: 'integer',
			required: true
		}
	}
};