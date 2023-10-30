const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// mongoose, body-parser, cors
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//define routes
const userRouter = require('./models/usermodel');

// mongoose
mongoose.set('strictQuery', true);

// app middleware
app.use(bodyParser.json());
app.use(cors());

// create a database connection
const URL = process.env.DB_URL;
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Check the connection status
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection success!");
});

//add user details
app.use('/user', userRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
