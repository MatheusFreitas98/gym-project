const usuarioModel = require('../models/usuarioModel');

class UsuarioController {

    async listar(req, res){ 
        //select * from usuarios;
        const resultado = await usuarioModel.find({}, { _id: 0, __v: 0 });
        res.json(resultado);
    }

    //async buscarPorCodigo(req, res){
    //    const codigo = req.params.codigo;
    //    //select * from conteudo where codigo = codigo;
    //    const conteudo = await conteudoModel.findOne({'codigo': codigo}, {_id:0});
    //    res.json(conteudo);
    //}

    async salvar(req, res) {            
        const usuario = req.body;

        //Gerador de novo código
        const obj = await usuarioModel.findOne({}).sort({'id': -1});
        usuario.id = obj == null ? 1 : obj.id + 1;

        //insert into conteudo values (...)
        const resultado = await usuarioModel.create(usuario);
        res.json(resultado);
    }

    //async atualizar(req, res){
    //    const codigo = req.params.codigo;
    //    const conteudo = req.body;
    //    const filtro = {'codigo': codigo};        
    //    const resultado = await conteudoModel.findOneAndUpdate(filtro, conteudo, {new: true});
    //    res.json(resultado);
    //}

    //async excluir(req, res){
    //  const codigo = req.params.codigo;
    //  const filtro = {'codigo': codigo};
    //  await conteudoModel.findOneAndDelete(filtro);
    //  res.send("Conteúdo excluído!");
    //}
}

module.exports = new UsuarioController();