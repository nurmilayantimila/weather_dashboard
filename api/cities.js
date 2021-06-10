const { getAll, insert } = require('../models/cities');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const cities = await getAll();
        res.json({ cities });
    } catch (error) {
        res.json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { city } = req.body;
        const result = await insert(city);
        res.json(result);
    } catch (error) {
        res.json({ error: error.message });
    }
});

// module.exports= router;
module.exports = router;
