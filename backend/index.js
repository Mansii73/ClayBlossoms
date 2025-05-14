// importing express
require('dotenv').config(); // Load environment variables

const express = require('express');
const mongoose = require('mongoose');
const UserRouter = require('./routers/UserRouter');
const cors = require('cors');
// const ProductRouter = require('./routers/ProductRouter');

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
app.use('/api/auth', UserRouter); // Updated route to match frontend
// app.use('/product', ProductRouter);

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

