const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Third Party MiddleWares
app.use(bodyParser.json());

// Import Routes
const postData = require('./routes/postData');
const getData = require('./routes/getData');
const delData = require('./routes/delData');
const updateData = require('./routes/updateData');


// Routes MiddleWares
app.use('/post', postData);
app.use('/get', getData);
app.use('/delete', delData);
app.use('/update', updateData);

// DataBase Connectivity
mongoose.connect(process.env.DB_NAME, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connection Ready");
})

//Server Info
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running at port ${process.env.PORT || 3000}`);
});
