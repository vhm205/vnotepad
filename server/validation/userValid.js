const Joi = require('@hapi/joi');

const schema = Joi.object({
	username: Joi.string().alphanum().min(3).max(30).required(),
});

module.exports.validate = async (req, res, next) => {
	try {
		const valid = await schema.validateAsync(req.body);

		res.locals.body = {
			user: res.locals.body.user,
			username: valid.username,
		};
		next();
	} catch (error) {
		return res.status(400).json({ msg: error.message });
	}
};
