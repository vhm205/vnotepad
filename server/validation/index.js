const registerValidate = require('./registerValid');
const loginValidate = require('./loginValid');
const userValidate = require('./userValid');

module.exports = {
	registerValid: registerValidate,
	loginValid: loginValidate,
	userValid: userValidate,
};
