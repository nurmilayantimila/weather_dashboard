//membuat models baru
//memudahkan mengambil data weather butuh pustaka 'axios'

const axios = require('axios');

//membutuhkan key api yg disimpan di env
const { WEATHER_API } = process.env;
//membuat fungsi untuk mendapatkkan data berdasarkan city
const getWeatherByCity = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API}&unit=metric`;

    return axios.get(url);
}



module.exports = getWeatherByCity;

//digunakan di routes