const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const multer = require('multer');
const path = require("path");

// Configuração do multer para salvar os arquivos na pasta "uploads"
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Caminho da pasta "uploads"
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({storage});

router.get('/', clienteController.listar);
router.post('/', upload.single('file'), clienteController.salvar);
router.get('/:codigo', clienteController.buscarPorCodigo);
router.put('/:codigo', clienteController.atualizar);
router.delete('/:codigo', clienteController.excluir);

module.exports = router;
