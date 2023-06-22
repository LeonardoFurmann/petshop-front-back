const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
  codigo:{
    type: Number,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  }
});

const Categoria = mongoose.model('Categoria', CategoriaSchema);

module.exports = Categoria;
