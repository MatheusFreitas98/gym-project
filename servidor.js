require('./db/mongo');
const express = require('express');
const servidor = express();
servidor.use(express.json());

//Rotas
const usuarioRouter = require('./routes/usuarioRouter');
servidor.use('/usuarios', usuarioRouter);

const aparelhoRouter = require('./routes/aparelhoRouter');
servidor.use('/aparelhos', aparelhoRouter);

//const dcnRouter = require('./routes/dcnRouter');
//servidor.use('/dcns', dcnRouter);

//const planoRouter = require('./routes/planoRouter');
//servidor.use('/planos', planoRouter);


servidor.get('/', function(req, res){    
    res.send('Servidor de APIs rodando...');
});

servidor.listen(3020, function(){
    console.log('Servidor rodando na porta 3020...');
});