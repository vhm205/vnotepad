const UserModel = require('../models/User.model');
const bcrypt = require('bcryptjs');

const profile = (req, res) => {
	res.json({
		body: req.user,
		token: req.token,
	});
};

const register = async (req, res) => {
	try {
		const user = new UserModel(res.locals.body);
		await user.save();
		res.status(201).json({ msg: 'Sign up successfully' });
	} catch (error) {
		console.log(error);

		res.status(400).json(error);
	}
};

const login = async (req, res) => {
	try {
		const { password, user } = res.locals.body;

		const comparePassword = await bcrypt.compare(password, user.password);
		if (!comparePassword)
			return res.status(400).json({ msg: 'Password incorrect' });

		const token = await user.generateToken();
		return res.json({ user, token });
	} catch (error) {
		return res.status(400).json(error);
	}
};

const logout = async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((t) => t.token !== req.token);
		await req.user.save();
		res.sendStatus(204);
	} catch (error) {
		res.status(500).json(error);
	}
};

const logoutAll = async (req, res) => {
	try {
		req.user.tokens = [];
		await req.user.save();
		res.sendStatus(204);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	profile,
	register,
	login,
	logout,
	logoutAll,
};
