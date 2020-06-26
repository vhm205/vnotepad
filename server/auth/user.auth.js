const jwt = require('jsonwebtoken');
const UserModel = require('../models/User.model');

module.exports.authUser = async (req, res, next) => {
	let token = req.header('Authorization') || req.params.access_token;
	if (!token) return res.status(400).json({ msg: 'Token is required' });

	if (token.startsWith('Bearer ')) {
		token = token.split(' ')[1];
	}

	try {
		const decoded = await jwt.verify(token, process.env.JWT_KEY);
		const user = await UserModel.findUserSafeById(decoded._id);
		if (!user) return res.status(404).json({ msg: 'Cannot to find user' });

		res.locals.body = {
			token,
			user,
		};

		next();
	} catch (error) {
		return res
			.status(401)
			.json({ msg: 'Not authorized to access this resource' });
	}
};
