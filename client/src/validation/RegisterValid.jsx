import Joi from '@hapi/joi';

export default Joi.object({
	username: Joi.string().alphanum().min(3).max(30).required(),
	password: Joi.string().min(3).max(30).required(),
	repass: Joi.ref('password'),
	email: Joi.string().email({
		minDomainSegments: 2,
		tlds: { allow: ['com', 'net'] },
	}),
});
