const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const clienteSchema = new mongoose.Schema({
    codigo: Number,
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    nomeCartao: {
        type: String,
        required: true
    },
    numeroCartao: {
        type: String,
        required: true
    },
    cvc: {
        type: Number,
        required: true
    },
    plano: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true,
        select: false
    },
    dtaCriacao: {
        type: Date,
        default: Date.now
    },
    token: {
        type: String,
        select: false
    }
});

clienteSchema.pre('save', async function (next) {
    const hash = await bcryptjs.hash(this.senha, 10);
    this.senha = hash;
    next();
  });
  
module.exports = mongoose.model('cliente', clienteSchema);
