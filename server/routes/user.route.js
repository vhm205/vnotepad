const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { registerValid, loginValid } = require('../validation');
const userAuth = require('../auth/user.auth');

router.post('/register', registerValid.validate, userController.register);
router.post('/login', loginValid.validate, userController.login);

router.get('/profile', userAuth.authUser, userController.profile);
router.post('/logout', userAuth.authUser, userController.logout);
router.post('/logoutAll', userAuth.authUser, userController.logoutAll);
router.get('/refresh-token', userAuth.authUser, userController.refreshToken);

module.exports = router;
