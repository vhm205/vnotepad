const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		max: 100,
	},
	content: {
		type: String,
		required: true,
	},
	access: {
		type: String,
		default: 'public',
	},
	protected: {
		type: String,
		default: null,
	},
	owner: {
		type: String,
		default: null,
	},
	url_id: {
		type: String,
		required: true,
	},
	created: { type: Date, default: Date.now },
	updated: { type: Date, default: null },
});

NoteSchema.statics = {
	createNew(item) {
		return this.create(item);
	},
};

module.exports = mongoose.model('Note', NoteSchema);
