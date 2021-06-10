const massive = require('massive');
// const { Sequelize, Model, DataTypes } = require('sequelize'); 

let db;

const getDB = async ({ NODE_ENV }) => {
    if (db) return db;

    try {
        if (NODE_ENV !== 'production') {
            db = await massive({
                host: '127.0.0.1',
                port: 5432,
                database: 'weather_dashboard',
                user: 'openpg',
                password: 'openpgpwd'
            });
        } else {
            db = await massive({
                connectionString: process.env.DATABASE_URL
            });
        }
        console.log('koneksi succes');
        console.log(db);
        return db;
    } catch (error) {
        console.log('koneksi failed');
        console.error(error.message);
        return null;
    }
}

module.exports = getDB;

