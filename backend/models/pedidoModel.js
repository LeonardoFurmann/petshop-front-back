const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
    codigo: Number,
    data: { type: Date, default: Date.now },
    total: Number,
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'cliente' },
    produto: { type: mongoose.Schema.Types.ObjectId, ref: 'produto' }
});

const Pedido = mongoose.model('Pedido', PedidoSchema);

module.exports = Pedido;
