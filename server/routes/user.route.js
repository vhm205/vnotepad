const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const userAuth = require('../auth/user.auth')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/me', userAuth.authUser, userController.profile)
router.post('/me/logout', userAuth.authUser, userController.logout)
router.post('/me/logoutall', userAuth.authUser, userController.logoutall)

module.exports = router