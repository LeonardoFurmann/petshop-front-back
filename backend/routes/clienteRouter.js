const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const multer = require('multer');

const upload = multer({dest: "uploads/"});

router.get('/', clienteController.listar);
router.post('/', upload.single('imagem'), clienteController.salvar);
router.get('/:codigo', clienteController.buscarPorCodigo);
router.put('/:codigo', clienteController.atualizar);
router.delete('/:codigo', clienteController.excluir);

module.exports = router;
