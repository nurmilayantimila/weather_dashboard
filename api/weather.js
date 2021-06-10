const getWeatherByCity = require("../models/weather");
const router = require('express').Router();



router.get('/:city', async (req, res) => {
    const { city } = req.params;
    //req.params mendapatkan kata kata yg terdapat pada city

    const weather = await getWeatherByCity(city);
    res.json(weather.data);
});


module.exports = router;