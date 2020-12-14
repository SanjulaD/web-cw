import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors'

import productRoutes from './routes/productRoutes.js'

dotenv.config('./../.env');

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send("API is running");
})

app.use('/api', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT, 
    console.log(`Server running ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
);