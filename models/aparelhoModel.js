const mongoose = require('mongoose');

const aparelhoSchema = mongoose.Schema({
    id: Number,
    nome: {
        type: String,
        required: [true, "O nome do aparelho é obrigatório!"],
    },
    descricao: {
        type: String,
        required: [true, "A descrição do aparelho é obrigatória!"],
    }
});

module.exports = mongoose.model('aparelhoSchema', aparelhoSchema);