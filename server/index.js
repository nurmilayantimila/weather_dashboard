const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');


const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;


//menambahkan env yang kta install
require('dotenv').config();



const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use("/api/cities", require('../api/cities.js'))
//router untuk weather
app.use("api/weather", require('../api/weather.js'))

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status(401);
    next(error);

})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})



module.exports = app;



