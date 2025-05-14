// importing express
require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
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

// Connect to MongoDB
mongoose.connect(process.env.DB_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());

// routers
<<<<<<< HEAD
app.use('/user', UserRouter);
app.use('/product', ProductRouter);
=======
app.use('/api/auth', UserRouter); // Updated route to match frontend
// app.use('/product', ProductRouter);
>>>>>>> 6cccf694d541bc9294bd80c08ac0e3bc62354043

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

