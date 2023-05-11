require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const { options } = require('./routes/auth');

connectDB();
const app = express();
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' ? 'https://learnit-ng-ha.netlify.app' : '*',
    optionsSuccessStatus: 200,
    methods: 'GET,PUT,POST,DELETE',
  })
);

app.get('/', (req, res) => {
  res.send('Hello world!');
});
app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
