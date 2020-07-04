const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		trim: true,
		min: 3,
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
	created: { type: Number, default: Date.now },
	updated: { type: Number, default: null },
});

NoteSchema.statics = {
	createNew(items) {
		return this.create(items);
	},
	getNoteById(url_id) {
		return this.findOne({ url_id: url_id });
	},
	getAll() {
		return this.find({});
	},
};

module.exports = mongoose.model('Note', NoteSchema);
