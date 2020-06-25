const Joi = require('@hapi/joi');
const UserModel = require('../models/User.model');

const schema = Joi.object({
	username: Joi.string().alphanum().min(3).max(30).required(),
	password: Joi.string().min(3).max(30).required(),
	repass: Joi.ref('password'),
	email: Joi.string().email({
		minDomainSegments: 2,
		tlds: { allow: ['com', 'net'] },
	}),
});

module.exports.validate = async (req, res, next) => {
	try {
		const valid = await schema.validateAsync(req.body);

		const user = await UserModel.checkUserExists(req.body.email);
		if (user) return res.status(400).json({ msg: 'Email is exists' });

		res.locals.body = {
			username: valid.username,
			email: valid.email,
			password: valid.password,
		};
		next();
	} catch (error) {
		return res.status(400).json({ msg: error.message });
	}
};
