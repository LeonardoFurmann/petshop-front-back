const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    codigo: Number,
    data: { type: Date, default: Date.now },
    total: Number,
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'cliente' },
    produto: { type: mongoose.Schema.Types.ObjectId, ref: 'produto' }
});

module.exports = mongoose.model('pedido', pedidoSchema);
