const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
const productsRoute = require('./app/routes/productsRoute');
const usersRoute = require('./app/routes/usersRoute');
const cartRoute = require('./app/routes/cartRoute');
const orderRoute = require('./app/routes/orderRoute');
const orderStatusRoute = require('./app/routes/orderStatusRoute');
const categoryRoute = require('./app/routes/categoryRoute');

app.get('/', (req, res) => {
  res.send('Welcome to Nusantara Store API');
});

// API Products from db

app.use('/api/products', productsRoute);
app.use('/api/users', usersRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/order-statuses', orderStatusRoute);
app.use('/api/categories', categoryRoute);

// 


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});