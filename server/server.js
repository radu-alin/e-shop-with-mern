import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';

if (process.env.NODE_ENV !== 'production') dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build'));
  });
}

app.get('/', (req, res) => {
  res.send('Api is running ... ');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(port, (error) => {
  if (error) throw error;
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .green.underline
  );
});
