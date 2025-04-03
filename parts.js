const express = require('express');
const router = express.Router();
const Part = require('../models/Part');

router.get('/', async (req, res) => {
    const { make, model } = req.query;
    const filter = {};
    if (make) filter.make = new RegExp(make, 'i');
    if (model) filter.model = new RegExp(model, 'i');
    const parts = await Part.find(filter);
    res.json(parts);
});

router.post('/', async (req, res) => {
    const part = new Part(req.body);
    await part.save();
    res.status(201).json(part);
});

module.exports = router;
