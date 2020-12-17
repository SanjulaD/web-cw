import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors'

import { notFound , errorHandler } from './middleware/errorMiddlware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config('./../.env');

connectDB();

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("API is running");
})

app.use('/api', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(
    PORT, 
    console.log(`Server running ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
);