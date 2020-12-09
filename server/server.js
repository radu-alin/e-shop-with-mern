import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import products from './data/products.js';

import colors from 'colors';

if (process.env.NODE_ENV !== 'production') dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); //for any request that come in, process their body and convert to .json
app.use(bodyParser.urlencoded({ extended: true })); //parse URL and remove spaces and symbols
app.use(cors()); //enable request from another origin to our server

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.get('/', (req, res) => {
  res.send('Api is running ... ');
});

app.get('/products', (req, res) => {
  res.send(products);
});

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = { productId, ...products[productId] };
  res.send(product);
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server running on port ${process.env.PORT}`.green.underline);
});
