const mongoose = require('mongoose')

const babySchema = new mongoose.Schema({
    nombreCompleto: {
        type: String,
        require: true,
        trim: true,
    },
    parentezco: {
        type: String,
        require: true,
        trim: true,
    },
    acompaniante: {
        type: String,
        require: true,
        trim: true,
    },
    llaveAcceso: {
        type: String,
        require: true,
        trim: true,
    },
    confirmacion: {
        type: Boolean,
        default: false,
    }
});

const Baby = mongoose.model('Baby', babySchema);

module.exports = Baby;