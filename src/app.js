require('dotenv').config();
require('./db/mongose');
const express = require('express');
const cors = require('cors');
const app = express();

// Configuración modificada de CORS para aceptar cualquier dominio
app.use(cors({
  origin: '*' // Permite solicitudes de cualquier origen
}));

app.use(express.json());

const babyRoutes = require('./router/babyRouter');

app.use('/api/baby', babyRoutes);

app.get('/', (req, res) => {
    res.send('Nueva version!');
});

module.exports = app;