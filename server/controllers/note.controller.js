const NoteModel = require('../models/Note.model');

const createNote = async (req, res) => {
	try {
		const result = await NoteModel.createNew(req.body);
		return res.status(200).json({ url_id: result.url_id });
	} catch (error) {
		return res.status(400).json(error);
	}
};

const deleteNote = async (req, res) => {
	try {
		const {
			user: { email },
		} = res.locals.body;
		const { url_id } = req.query;
		await NoteModel.deleteNote(email, url_id);

		return res.sendStatus(204);
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
		const {
			user: { email },
		} = res.locals.body;
		let _page = +req.query._page;
		let _limit = +req.query._limit;
		let _totalRows = +req.query._totalRows;

		if (_page === 0) _page = 1;
		const _skip = _page * _limit - _limit;

		if (_totalRows === 0) {
			_totalRows = await NoteModel.countNote(email);
		}
		const allNotes = await NoteModel.getAll(email, _skip, _limit);

		return res.status(200).json({
			notes: allNotes,
			pagination: { _page, _limit, _totalRows },
		});
	} catch (error) {
		return res.status(400).json(error);
	}
};

const updateNote = async (req, res) => {
	try {
		const {
			user: { email },
		} = res.locals.body;
		const { title, content, access, protected, url_id } = req.body;

		const items = {
			title: title,
			content: content,
			access: access,
			protected: protected,
			updated: Date.now(),
		};
		const result = await NoteModel.updateNote(email, url_id, items);
		const success = result.n !== 0;

		return res.status(200).json({
			status: success,
			msg: success
				? 'Update note successfully'
				: 'There are some errors! Please try again',
		});
	} catch (error) {
		return res.status(400).json(error);
	}
};

const updateFavorite = async (req, res) => {
	try {
		const {
			user: { email },
		} = res.locals.body;
		const { isFavorite, url_id } = req.query;
		await NoteModel.updateFavorite(email, url_id, isFavorite);

		return res.sendStatus(204);
	} catch (error) {
		return res.status(400).json(error);
	}
};

module.exports = {
	createNote,
	getNoteById,
	getAll,
	updateNote,
	deleteNote,
	updateFavorite,
};
