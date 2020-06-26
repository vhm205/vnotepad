import Joi from '@hapi/joi';

export default Joi.object({
	password: Joi.string().min(3).max(30).required(),
	email: Joi.string().email({
		minDomainSegments: 2,
		tlds: { allow: ['com', 'net'] },
	}),
});
