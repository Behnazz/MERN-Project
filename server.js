const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
//route files
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const profile = require('./routes/api/profile');
const post = require('./routes/api/post');

//load env variables
dotenv.config({ path: './config/config.env' });

//connect to DB
connectDB();

const app = express();
app.use(cors());
//initialize
app.use(express.json({ extended: false }));

app.get('/', (req, res, next) => res.send('API running'));

//mount routers
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/posts', post);
app.use('/api/profile', profile);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server starter on port ${PORT}`));
