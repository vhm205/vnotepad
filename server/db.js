const mongoose = require('mongoose');

mongoose
	.connect(process.env.DB_CONNECT, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.catch((err) => {
		console.error(err);
	});

module.exports = mongoose.connection;
