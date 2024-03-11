require('dotenv').config();
require('./db/mongose')
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const babyRoutes = require('./router/babyRouter');

app.use('/api/baby', babyRoutes);

app.get('/', (req, res) => {
    res.send('Bienvenido a mi aplicación Node.js!');
});

module.exports = app;