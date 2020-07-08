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
	updated: { type: Number, default: Date.now },
});

NoteSchema.statics = {
	createNew(items) {
		return this.create(items);
	},
	updateNote(owner, url_id, items) {
		return this.updateOne({ owner: owner, url_id: url_id }, { $set: items });
	},
	deleteNote(owner, url_id) {
		return this.deleteOne({ owner: owner, url_id: url_id });
	},
	getNoteById(url_id) {
		return this.findOne({ url_id: url_id });
	},
	getAll(owner, skip, limit) {
		return this.find({ owner: owner })
			.sort({ updated: 1 })
			.skip(skip)
			.limit(limit);
	},
	countNote(owner) {
		return this.countDocuments({ owner: owner });
	},
};

module.exports = mongoose.model('Note', NoteSchema);
