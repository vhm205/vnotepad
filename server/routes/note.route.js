const express = require('express');
const router = express.Router();
const userAuth = require('../auth/user.auth');
const noteController = require('../controllers/note.controller');
const { noteValid } = require('../validation');

router.post(
	'/create',
	userAuth.authUser,
	noteValid.validateNote,
	noteController.createNote
);
router.patch(
	'/update-note',
	userAuth.authUser,
	noteValid.validateNote,
	noteController.updateNote
);
router.get('/delete-note', userAuth.authUser, noteController.deleteNote);
router.get('/get-all', userAuth.authUser, noteController.getAll);
router.get('/note/:url_id', noteController.getNoteById);

module.exports = router;
