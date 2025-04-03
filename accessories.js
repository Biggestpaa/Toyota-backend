const express = require('express');
const router = express.Router();
const Part = require('../models/Part');

router.get('/', async (req, res) => {
    const { make, model } = req.query;
    const filter = { category: 'Accessories' };
    if (make) filter.make = new RegExp(make, 'i');
    if (model) filter.model = new RegExp(model, 'i');
    const accessories = await Part.find(filter);
    res.json(accessories);
});

router.post('/', async (req, res) => {
    const accessory = new Part({ ...req.body, category: 'Accessories' });
    await accessory.save();
    res.status(201).json(accessory);
});

module.exports = router;
