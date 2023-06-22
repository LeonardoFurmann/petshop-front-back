const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    codigo: Number,
    nome: {
        type: String,
        required: true,
      },
    preço: {
        type: String,
        required: true,
      },
    descrição: {
        type: String,
        required: true,
      },
    animal: {
        type: String,
        required: true,
      },
    imagem: {
        type: String,
        required: true,
      },
    categoria: { type: mongoose.Schema.Types.String, ref: 'categoria' }
});

const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;