const mongoose = require('mongoose');

const exercicioSchema = mongoose.Schema({
    id: Number,
    nome: {
        type: String,
        required: [true, "O nome do aparelho é obrigatório!"],
    },
    series: {
        type: Number,
        required: [true, "O número de séries é obrigatório!"],
    },
    repeticoes: {
        type: Number,
        required: [true, "O número de repetições é obrigatório!"],
    },
    carga: {
        type: Number,
        required: [true, "A carga de treino é obrigatória! Medida: Kilogramas. Ex: 15 serão 15kg de carga."],
    },
    intervalo: {
        type: Number,
        required: [true, "O tempo de intervalo é obrigatório! Medida: Segundos. Ex: 45 serão 45 segundos de intervalo."]
    },
    aparelho: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'aparelhoSchema'
    }
});

module.exports = mongoose.model('exercicioSchema', exercicioSchema);