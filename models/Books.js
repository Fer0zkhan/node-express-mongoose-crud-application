const mongoose = require('mongoose');

//Schema
const BookSchema = new mongoose.Schema({
    name: String,
    price: Number,
    type: String
});

module.exports = mongoose.model('BooksData', BookSchema);
