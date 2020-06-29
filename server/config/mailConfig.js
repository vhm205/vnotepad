const nodemailer = require('nodemailer');

module.exports.sendMail = (to, subject, html) => {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		secure: false,
		auth: {
			user: process.env.ADMIN_MAIL,
			pass: process.env.ADMIN_PASS,
		},
	});

	const mailOptions = {
		to: to,
		subject: subject,
		html: html,
	};

	transporter.sendMail(mailOptions, (err, info) => {
		if (err) throw new Error(err);
		return info;
	});
};
