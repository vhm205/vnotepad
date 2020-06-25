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
				token: {
					_id: false,
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
		const salt = await bcrypt.genSalt(8);
		this.password = await bcrypt.hash(this.password, salt);
	}

	next();
});

userSchema.methods = {
	async generateToken() {
		const token = await jwt.sign({ _id: this._id }, process.env.JWT_KEY);
		this.tokens = [...this.tokens, { token }];
		await this.save();
		return token;
	},
};

userSchema.statics = {
	async findByCredentials(email, password) {
		const user = await User.findOne({ email });
		if (!user) throw new Error({ error: 'Invalid email login credentials' });

		const comparePassword = await bcrypt.compare(password, user.password);
		if (!comparePassword)
			throw new Error({ error: 'Invalid password login credentials' });

		return user;
	},
	checkUserExists(email) {
		return this.findOne({ email });
	},
};

module.exports = mongoose.model('User', userSchema);
