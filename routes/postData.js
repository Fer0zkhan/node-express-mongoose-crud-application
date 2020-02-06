const express = require('express');
const postData = express();
const Books = require('../models/Books');

postData.post('/dataPost', async(req, res) => {
    const newBook = new Books({
        name: req.body.name,
        price: req.body.price,
        type: req.body.type
    });
    try {
        const saveNewBook = await newBook.save(() => {
            console.log('Data Save');
        });
        res.json(saveNewBook);
    } catch (error) {
        res.json({ "message": error });
    }
});


module.exports = postData;