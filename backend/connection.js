const mongoose = require('mongoose');

const url = process.env.DB_URL

mongoose.connect(url)
.then((result) => {
  console.log('connected to db');
}).catch((err) => {
  console.error('Error connecting to db:', err.message);
});

module.exports = mongoose;