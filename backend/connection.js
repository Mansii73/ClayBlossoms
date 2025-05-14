const mongoose = require('mongoose');

const url = process.env.DB_URL

mongoose.connect(url)
<<<<<<< HEAD
.then((result) => {
  console.log('connected to db');
}).catch((err) => {
  console.error('Error connecting to db:', err.message);
});
=======
    .then((result) => {
        console.log('✅ MongoDB Connected');
    })
    .catch((err) => {
        console.log(err);
    });
>>>>>>> 5fe7e71ce3909064a4ccb4881d84de0faa000ad0

module.exports = mongoose;