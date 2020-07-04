const NoteModel = require('../models/Note.model');

const createNote = async (req, res) => {
	try {
		const createNewNote = await NoteModel.createNew(req.body);
		return res.status(200).json({ url_id: createNewNote.url_id });
	} catch (error) {
		return res.status(400).json(error);
	}
};

const getNoteById = async (req, res) => {
	try {
		const { url_id } = req.params;
		const noteInfo = await NoteModel.getNoteById(url_id);
		return res.status(200).json(noteInfo);
	} catch (error) {
		return res.status(400).json(error);
	}
};

const getAll = async (req, res) => {
	try {
		const allNotes = await NoteModel.getAll();
		return res.status(200).json(allNotes);
	} catch (error) {
		return res.status(400).json(error);
	}
};

module.exports = {
	createNote,
	getNoteById,
	getAll,
};
