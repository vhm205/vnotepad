const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { registerValid, loginValid, userValid } = require('../validation');
const userAuth = require('../auth/user.auth');

router.post('/register', registerValid.validate, userController.register);
router.post('/login', loginValid.validate, userController.login);

router.get('/profile', userAuth.authUser, userController.profile);
router.get('/refresh-token', userAuth.authUser, userController.refreshToken);
router.get('/reset-password', userAuth.authUser, userController.resetPassword);
router.post(
	'/update-password',
	userAuth.authUser,
	userValid.validateUpdatePassword,
	userController.updatePassword
);
router.post(
	'/update-profile',
	userAuth.authUser,
	userValid.validateUpdateProfile,
	userController.updateProfile
);
router.post('/logout', userAuth.authUser, userController.logout);
router.post('/logoutAll', userAuth.authUser, userController.logoutAll);

module.exports = router;
