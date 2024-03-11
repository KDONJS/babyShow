require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('conexion exitosa a MongoDB'))
    .catch(err => console.error('No se pudo conectar a MongoDB', err));