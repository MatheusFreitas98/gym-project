const mongoose = require('mongoose');

const aparelhoSchema = mongoose.Schema({
    id: Number,
    nome: {
        type: String,
        required: [true, "O nome do aparelho � obrigat�rio!"],
    },
    descricao: {
        type: String,
        required: [true, "A descri��o do aparelho � obrigat�ria!"],
    }
});

module.exports = mongoose.model('aparelhoSchema', aparelhoSchema);