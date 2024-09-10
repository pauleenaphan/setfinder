require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();
const mongoose = require("mongoose"); //alows you to work with schemas and models 
const port = 3000;

const dev_db_url = process.env.DEV_DB_URL;
const mongoDB = process.env.MONGODB_URI || dev_db_url;

var authRouter = require("./routes/auth");


app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.use(express.json()); //allows us to use json for incoming request

app.use('/auth', authRouter);

console.log("MongoDB URI:", mongoDB); // Debug the URI

mongoose.connect(mongoDB)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

