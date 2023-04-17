const mongoose = require('mongoose');

const exercicioSchema = mongoose.Schema({
    id: Number,
    nome: {
        type: String,
        required: [true, "O nome do aparelho � obrigat�rio!"],
    },
    series: {
        type: Number,
        required: [true, "O n�mero de s�ries � obrigat�rio!"],
    },
    repeticoes: {
        type: Number,
        required: [true, "O n�mero de repeti��es � obrigat�rio!"],
    },
    carga: {
        type: Number,
        required: [true, "A carga de treino � obrigat�ria! Medida: Kilogramas. Ex: 15 ser�o 15kg de carga."],
    },
    intervalo: {
        type: Number,
        required: [true, "O tempo de intervalo � obrigat�rio! Medida: Segundos. Ex: 45 ser�o 45 segundos de intervalo."]
    },
    aparelho: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'aparelhoSchema'
    }
});

module.exports = mongoose.model('exercicioSchema', exercicioSchema);