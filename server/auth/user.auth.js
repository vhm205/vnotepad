const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

module.exports.authUser = async (req, res, next) => {
	const token = req.header('Authorization');
	if (!token) return res.status(400).json({ msg: 'Token is required' });

	const decoded = await jwt.verify(token, process.env.JWT_KEY);

	try {
		const user = await User.findOne({
			_id: decoded._id,
			'tokens.token': token,
		});
		if (!user) return res.status(400).json({ msg: 'Cannot to find user' });

		req.token = token;
		req.user = user;

		next();
	} catch (error) {
		return res
			.status(401)
			.json({ msg: 'Not authorized to access this resource' });
	}
};
