const mongoose = require('mongoose');

const EFocoSchema = mongoose.Schema({
	type: String,
	enum: ['Hipertrofia, Forca, Resistencia, Potencia, Flexibilidade'],
	required: [true, "O foco de treino é obrigatório!"]
})

module.exports = mongoose.model('EFocoEnumSchema', EFocoSchema)