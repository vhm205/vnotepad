const NoteModel = require('../models/Note.model');

const createNote = async (req, res) => {
	try {
		console.log(req.body);
	} catch (error) {
		return res.status(400).json(error);
	}
};

module.exports = {
	createNote,
};
