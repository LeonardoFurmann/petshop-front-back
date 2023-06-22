const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.listar);
router.post('/', produtoController.salvar);
router.get('/:codigo', produtoController.buscarPorCodigo);
router.put('/:codigo', produtoController.atualizar);
router.delete('/:codigo', produtoController.excluir);

module.exports = router;