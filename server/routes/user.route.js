const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { registerValid, loginValid } = require('../validation');
const userAuth = require('../auth/user.auth');

router.post('/register', registerValid.validate, userController.register);
router.post('/login', loginValid.validate, userController.login);
router.get('/me', userAuth.authUser, userController.profile);
router.post('/me/logout', userAuth.authUser, userController.logout);
router.post('/me/logoutAll', userAuth.authUser, userController.logoutAll);

module.exports = router;
