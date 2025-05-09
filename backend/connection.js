require('dotenv').config();
const mongoose = require('mongoose');

const url = process.env.DB_URL;

// asynchhronous function - returns a promise
mongoose.connect(url)
    .then((result) => {
        console.log('✅ MongoDB Connected');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoose;