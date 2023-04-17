const mongoose = require('mongoose');
const foco = require('./enums/EFocoEnum');

const treinoSchema = mongoose.Schema({
    id: Number,
    foco: {
        type: String,
        ref: mongoose.Schema.Types.ObjectId,
    },
    exercicios: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'exercicioSchema'
    }]
     
})

module.exports = mongoose.model('treinoSchema', treino);