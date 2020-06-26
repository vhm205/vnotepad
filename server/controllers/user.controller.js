const UserModel = require('../models/User.model');
const bcrypt = require('bcryptjs');

const profile = (req, res) => {
	res.status(200).json({ user: res.locals.body.user });
};

const register = async (req, res) => {
	try {
		const user = new UserModel(res.locals.body);
		await user.save();
		res.status(201).json({ msg: 'Sign up successfully' });
	} catch (error) {
		res.status(400).json(error);
	}
};

const login = async (req, res) => {
	try {
		const { password, user } = res.locals.body;

		const comparePassword = await bcrypt.compare(password, user.password);
		if (!comparePassword)
			return res.status(400).json({ msg: 'Password incorrect' });

		const refreshToken = await user.generateRefreshToken();
		const token = await user.generateToken();

		return res.json({
			msg: 'Login successfully',
			refreshToken: refreshToken,
			token: token,
		});
	} catch (error) {
		return res.status(400).json(error);
	}
};

const logout = async (req, res) => {
	try {
		let { user, token: refreshToken } = res.locals.body;
		user = await UserModel.findUserById(user._id);
		user.tokens = user.tokens.filter((t) => t.token !== refreshToken);
		await user.save();

		return res.sendStatus(204);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const logoutAll = async (req, res) => {
	try {
		const { user } = res.locals.body;
		user = await UserModel.findUserById(user._id);
		user.tokens = [];
		await user.save();

		return res.sendStatus(204);
	} catch (error) {
		return res.status(500).json(error);
	}
};

const refreshToken = async (req, res) => {
	try {
		const { token: refreshToken } = res.locals.body;
		const user = await UserModel.checkTokenExists(refreshToken);
		if (!user)
			return res.status(400).json({ msg: 'Refresh token is not exists' });

		const token = await user.generateToken();
		return res.json({ token: token });
	} catch (error) {
		return res.status(400).json(error);
	}
};

module.exports = {
	profile,
	register,
	login,
	logout,
	logoutAll,
	refreshToken,
};
