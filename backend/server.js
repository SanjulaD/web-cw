const express = require('express');
const seeds = require('./data/seeds');
const slider = require('./data/slider');
const lendMachines = require('./data/lendMachines');

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

app.listen(5000, console.log('Server running on port 5000'));