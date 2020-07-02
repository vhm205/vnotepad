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

module.exports = router;
