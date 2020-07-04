const express = require('express');
const router = express.Router();
const userAuth = require('../auth/user.auth');
const noteController = require('../controllers/note.controller');
const { noteValid } = require('../validation');

router.post(
	'/create',
	userAuth.authUser,
	noteValid.validateCreateNote,
	noteController.createNote
);
router.get('/note/:url_id', noteController.getNoteById);
router.get('/get-all', userAuth.authUser, noteController.getAll);

module.exports = router;
