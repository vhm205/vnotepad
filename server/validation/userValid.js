const Joi = require('@hapi/joi');

const schemaUpdateProfile = Joi.object({
	username: Joi.string().alphanum().min(3).max(30).required(),
});

module.exports.validateUpdateProfile = async (req, res, next) => {
	try {
		const valid = await schemaUpdateProfile.validateAsync(req.body);

		res.locals.body = {
			user: res.locals.body.user,
			username: valid.username,
		};
		next();
	} catch (error) {
		return res.status(400).json({ msg: error.message });
	}
};

const schemaUpdatePassword = Joi.object({
	password: Joi.string().min(3).max(30).required(),
	repass: Joi.ref('password'),
});

module.exports.validateUpdatePassword = async (req, res, next) => {
	try {
		const valid = await schemaUpdatePassword.validateAsync(req.body);
		res.locals.password = valid.password;
		next();
	} catch (error) {
		return res.status(400).json({ msg: error.message });
	}
};
