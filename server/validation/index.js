const registerValidate = require('./registerValid');
const loginValidate = require('./loginValid');
const userValidate = require('./userValid');
const noteValidate = require('./noteValid');

module.exports = {
	registerValid: registerValidate,
	loginValid: loginValidate,
	userValid: userValidate,
	noteValid: noteValidate,
};
