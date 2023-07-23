const express = require('express');
const updateData = express();
const Books = require('../models/Books');


updateData.patch('/updateData', async(req, res) => {
    try {
        const update = await Books.updateOne({ name: req.body.name }, { $set: { name: req.body.newName } });
        if (update) {
            return res.json(update);
        }
        if (!update) {
            res.send('Not Updated');
        }
    } catch (error) {
        console.log(error);
        res.send({ "message": error });
    }

});



module.exports = updateData;
