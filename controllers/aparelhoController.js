const aparelhoModel = require('../models/aparelhoModel');
const projection = { _id: 0, __v: 0 };

class AparelhoController {
    async listar(req, res) {
        const resultado = await aparelhoModel.find({}, projection);
        res.json(resultado);
    }

    async buscar(req, res) {
        const codigo = req.params.codigo;
        const resultado = await aparelhoModel.find({ 'id': codigo }, projection);
        res.json(resultado);
    }

    async inserir(req, res) {
        const aparelho = req.body;
        const obj = await aparelhoModel.findOne().sort({ 'id': -1 }); // .sort({'id': -1}) indica que a busca deve ser feita em ordem decrescente, assim, o método findOne buscará por padrão o último elemento e não o primeiro

        aparelho.id = obj == null ? 1 : obj.id + 1; // if ternário que diz que: se o id do objeto recebido na busca do banco for vazio, o id do aparelho será 1, pois será a primeira instância do banco, senão, receberá o id da última instância + 1

        const resultado = await aparelhoModel.create(aparelho);
        res.json(resultado);
    }

    async atualizar(req, res) {
        const codigo = req.params.codigo;
        const aparelho = req.body;

        // {new: true} indica se a resposta do método deve ser o novo objeto ou o antigo
        const resultado = await aparelhoModel.findOneAndUpdate({ 'id': codigo }, aparelho, { new: true, projection });
        res.json(resultado);
    }

    async excluir(req, res) {
        const codigo = req.params.codigo;
        const aparelho = await aparelhoModel.findOneAndDelete({'id': codigo});
        res.send(`Aparelho ${aparelho.nome} excluido com sucesso!`);
    }
}

module.exports = new AparelhoController();
