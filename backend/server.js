import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors'

import seeds from './data/seeds.js';
import slider from './data/slider.js';
import lendMachines from './data/lendMachines.js';

dotenv.config('./../.env');

connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send("API is running");
})

app.get('/api/seeds', (req, res) => {
    res.json(seeds);
})

app.get('/api/lendMachines', (req, res) => {
    res.json(lendMachines);
})

app.get('/api/slider', (req, res) => {
    res.json(slider);
})

app.get('/api/seeds/:id', (req, res) => {
    const seed = seeds.find(s => s._id === req.params.id);
    res.json(seed);
})

app.get('/api/lendMachines/:id', (req, res) => {
    const lendMachine = lendMachines.find(s => s._id === req.params.id);
    res.json(lendMachine);
})

const PORT = process.env.PORT || 5000;

app.listen(
    PORT, 
    console.log(`Server running ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold)
);