const aparelhoController = require('../controllers/aparelhoController');
const express = require('express');

const router = express.Router();

router.get('/', aparelhoController.listar);
router.get('/:codigo', aparelhoController.buscar);
router.post('/', aparelhoController.inserir);
router.put('/:codigo', aparelhoController.atualizar);
router.delete('/:codigo', aparelhoController.excluir);

module.exports = router;
