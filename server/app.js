require('dotenv').config();
require('./db');
const express = require('express');
const app = express();
const cors = require('cors');

const userRoute = require('./routes/user.route');
const noteRoute = require('./routes/note.route');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', userRoute);
app.use('/notes', noteRoute);

app.get('/', (req, res) => {
	res.send('Hello World');
});

const PORT = process.env.PORT || 1002;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
