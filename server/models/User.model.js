const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
			min: 3,
			max: 30,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 6,
		},
		tokens: [
			{
				_id: false,
				token: {
					type: String,
					required: true,
				},
			},
		],
	},
	{ timestamps: true }
);

userSchema.pre('save', async function (next) {
	if (this.isModified('password')) {
		const salt = await bcrypt.genSalt(12);
		this.password = await bcrypt.hash(this.password, salt);
	}
	next();
});

userSchema.methods = {
	async generateRefreshToken() {
		const token = await jwt.sign({ _id: this._id }, process.env.JWT_KEY);
		this.tokens = [...this.tokens, { token }];
		await this.save();
		return token;
	},
	async generateToken() {
		const token = await jwt.sign({ _id: this._id }, process.env.JWT_KEY, {
			expiresIn: '1h',
		});
		return token;
	},
};

userSchema.statics = {
	checkUserExists(email) {
		return this.findOne({ email });
	},
	findUserSafeById(id) {
		return this.findOne({ _id: id }, { password: 0, tokens: 0 });
	},
	findUserById(id) {
		return this.findOne({ _id: id }, { password: 0 });
	},
	checkTokenExists(token) {
		return this.findOne({ 'tokens.token': token });
	},
	updateProfile(id, data) {
		return this.updateOne({ _id: id }, { $set: data });
	},
	updatePassword(id, password) {
		return this.updateOne({ _id: id }, { $set: { password } });
	},
};

module.exports = mongoose.model('User', userSchema);
