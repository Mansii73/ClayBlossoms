// importing express
require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose'); // 👈 Add this line
const UserRouter = require('./routers/UserRouter');
const cors = require('cors');
<<<<<<< HEAD
const ProductRouter = require('./routers/productRoutes');
// const cors = require('cors');
=======
// const ProductRouter = require('./routers/ProductRouter');
>>>>>>> 5fe7e71ce3909064a4ccb4881d84de0faa000ad0

// initialize express
const app = express();
const port = process.env.PORT || 5000;

// ➕ Debugging: Log MongoDB URI to check if it's loaded correctly
// console.log("MongoDB URI: ", process.env.DB_URL);  // Updated to use DB_URL

// // ➕ Connect to MongoDB Atlas
// mongoose.connect(process.env.DB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch((err) => console.error("❌ MongoDB Error:", err));

// middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());

// routers
app.use('/user', UserRouter);
app.use('/product', ProductRouter);

// test routes
app.get('/', (req, res) => {
  res.send('response from express');
});

app.get('/add', (req, res) => {
  res.send('response from add');
});

// starting the server
app.listen(port, () => {
  console.log(`🚀 Server started on http://localhost:${port}`);
});

