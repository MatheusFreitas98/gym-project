const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    id: Number,
    cpf: {
        type: String,
        required: [true, "O CPF é obrigatório!"]
    },
    nome: {
        type: String,
        required: [true, "O nome é obrigatório!"]
    },
    dataNasc: Date,
    dataInicio: {
        type: Date,
        default: Date.now
    },
    treino: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'treinoSchema'
    }]
})

module.exports = mongoose.model('usuarioSchema', usuarioSchema);