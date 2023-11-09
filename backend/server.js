const express = require('express');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const app = express();

mongoose.set('strictQuery', true);

app.use(bodyParser.json());
app.use(cors());

//app middleware
const port = process.env.PORT || 3000;
const URL = process.env.DB_URL;
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Check the connection status
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection success!");
});

//define routes
const userRouter = require('./routes/userroute');
app.use('/user', userRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
