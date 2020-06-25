const Joi = require('@hapi/joi');
const UserModel = require('../models/User.model');

const schema = Joi.object({
	password: Joi.string().min(3).max(30).required(),
	email: Joi.string().email({
		minDomainSegments: 2,
		tlds: { allow: ['com', 'net'] },
	}),
});

module.exports.validate = async (req, res, next) => {
	try {
		const valid = await schema.validateAsync(req.body);

		const user = await UserModel.checkUserExists(req.body.email);
		if (!user) return res.status(400).json({ msg: 'Email is not registered' });

		res.locals.body = {
			password: valid.password,
			user: user,
		};
		next();
	} catch (error) {
		return res.status(400).json({ msg: error.message });
	}
};
