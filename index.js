const express = require('express');
require('dotenv').config();
const app = express();
const connectDB = require('./db/connect');
const productRoutes = require('./Routes/productRoute');


const port = process.env.PORT || 4000;
// console.log(process.env.PORT);

app.use(express.json());
app.use('/api/product', productRoutes);
//http://localhost:5000/api/product/
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
//http://localhost:5000/api/product/