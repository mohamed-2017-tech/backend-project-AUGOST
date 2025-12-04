const express = require('express');
require('dotenv').config();
const app = express();
const connectDB = require('./db/connect');


const port = process.env.PORT || 4000;
// console.log(process.env.PORT);

connectDB(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});