const express = require('express');
const delData = express();
const Books = require('../models/Books');

delData.delete('/delAllData', async(req, res) => {
    try {
        const data = await Books.deleteMany({});
        res.json({ "dataDelete": data });
    } catch (error) {
        res.json(error);
    }
});


module.exports = delData;