const Joi = require('@hapi/joi');

const schema = Joi.object({
	title: Joi.string().alphanum().max(100).required(),
	content: Joi.string().required(),
	access: Joi.string().allow('public', 'private', 'password'),
	owner: Joi.string()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net'] },
		})
		.default(null),
	protected: Joi.string().default(null),
	url_id: Joi.string().required(),
});

module.exports.validateCreateNote = async (req, res, next) => {
	try {
		const valid = await schema.validateAsync(req.body);
		console.log(valid);

		next();
	} catch (error) {
		return res.status(400).json({ msg: error.message });
	}
};
