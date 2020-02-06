const express = require('express');
const getData = express();
const Books = require('../models/Books');

getData.get('/getAllData', async(req, res) => {
    try {
        const data = await Books.find({});
        res.json(data);
    } catch (error) {
        res.json(error);
    }
});

module.exports = getData;